import { useState, useContext, useEffect } from "react";
import { RestCtx } from "../../../../core/services/rest/RestProvider";
import { useQuery } from "@apollo/client";
import { GET_OPERATIONS } from "../../../../core/model/operations/queries";
import { AnalyticIO } from "../../../../core/services/io/IOProvider";
import { AppContext } from "../../../../core/services/context/index";

export default function useOperations(props: any) {
  const [preview, setPreview] = useState<any>();
  const { data, loading: loadingOperation, error, refetch } = useQuery(
    GET_OPERATIONS
  );
  const [loading, setLoading] = useState(false);
  const rest = useContext(RestCtx);
  const analyticIO = useContext(AnalyticIO);
  const app = useContext(AppContext);

  function handleAnalytic(payload: any) {
    if (payload?.content?.type === "new:order") {
      handleNewOrder(payload);
    }
  }

  function handleNewOrder(payload: any) {
    refetch();
    alert("new order");
  }

  function diffuseChangedState(status: string, order: any) {
    analyticIO.emit("message", {
      room: app?.company,
      content: { type: `status:${status}`, order: order },
    });
  }

  function onUpdate(data: any) {
    refetch();
    diffuseChangedState(data.status, data);
  }

  function cleanAnalytic() {
    if (analyticIO) {
      analyticIO.off("message", handleAnalytic);
    }
  }

  function handleError(error: any) {
    if (error) console.log(error.message);
  }

  async function setStatus(id: any, status: string) {
    try {
      if (await confirm(`This operation will be ${status}, it'ok?`)) {
        setLoading(true);
        const response = await rest.mutate("PUT", id, { status });
        console.log(response.status)
        if (response.ok) {
          onUpdate(await response.json());
        }
      }
    } catch (e) {
      handleError(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (analyticIO) {
      analyticIO.on("message", handleAnalytic);
    }
    return () => {
      cleanAnalytic();
    };
  }, []);

  handleError(error);
  console.log(app, "use operation");

  return {
    operations: data?.operations?.edges,
    preview,
    setPreview,
    setStatus,
    loading: loadingOperation || loading,
    bounds: app?.setting?.bounds
  };
}
