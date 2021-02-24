import { useLazyQuery } from "@apollo/client";
import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { GET_FULL_STOCKS } from "../../../../core/model/stock/queries";
import { AppContext } from "../../../../core/services/context/index";
import { RestCtx } from "../../../../core/services/rest/RestProvider";

export default function useStock(props: any) {
  const app = useContext(AppContext);
  const [image, setImage] = useState();
  const { register, setValue, handleSubmit } = useForm();
  const rest = useContext(RestCtx);
  const [fetch] = useLazyQuery(GET_FULL_STOCKS, {
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    setImage(props.stock?.file);
  }, [app.preview]);

  function handleError(error: any) {
    console.log(error.message);
  }

  function onUpdate() {
    fetch();
  }

  async function submit(data: any) {
    try {
      app.setLoading(true);
      const response = await rest.mutate("PUT", `/stocks/${props?.stock._id}`, {
        ...data,
        id: null,
      });
      console.log(response.status);
      onUpdate();
    } catch (error) {
      handleError(error);
    } finally {
      app.setLoading(false);
    }
  }

  return {
    setValue,
    register,
    submit,
    handleSubmit,
    app,
    image,
    stock: props.stock,
  };
}
