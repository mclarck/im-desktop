import { useLazyQuery } from "@apollo/client";
import { useCallback, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../../../../core/services/context";
import { RestCtx } from "../../../../core/services/rest";
import { GET_SETTING } from "../../../../core/model/setting/queries";
import { sanitize } from "../../../../core/lib/ultils";
import { unserializeBounds } from "../../../../core/lib/serializer";

export default function useSettings(props: any) {
  const app = useContext(AppContext);
  const { register, reset, setValue, handleSubmit } = useForm();
  const rest = useContext(RestCtx);
  const [file, onLoadFile] = useState<any>();

  const [
    fetch,
    { loading: loadingSetting, data: setting, error: errorSetting },
  ] = useLazyQuery(GET_SETTING, {
    fetchPolicy: "network-only",
  });

  const bounds = setting?.setting?.bounds;

  const loadSetting = useCallback(
    () => fetch({ variables: { id: "/api/settings/1" } }),
    [fetch]
  );
  const onUpdate = (setting: any) => {
    reset();
    loadSetting();
  };

  function handleError(error: any) {
    if (error) console.log(error.message);
  }

  async function create(data: any) {
    return rest.mutate("POST", `/api/settings`, data);
  }

  async function update(data: any) {
    return rest.mutate("PUT", `/api/settings/1`, data);
  }

  async function submit(brut: any) {
    try {
      app.setLoading(true);
      const data = sanitize({ ...brut, file: file?.file });
      data.bounds = unserializeBounds(data?.bounds); 
      const response = data?.setting ? await update(data) : await create(data);
      if (response.ok) {
        onUpdate(await response.json());
      }
    } catch (error) {
      handleError(error);
    } finally {
      app.setLoading(false);
    }
  }

  useEffect(() => {
    loadSetting();
  }, [loadSetting]);

  handleError(errorSetting);
  return {
    bounds,
    loading: loadingSetting || app.loading,
    location: setting?.setting?.address?.location,
    address: setting?.setting?.address,
    setting: setting?.setting,
    onUpdate,
    onLoadFile,
    register,
    submit,
    handleSubmit,
    app,
  };
}
