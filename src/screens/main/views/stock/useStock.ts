import { useLazyQuery } from "@apollo/client";
import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { GET_FULL_STOCKS } from "../../../../core/model/stock/queries";
import { AppContext } from "../../../../core/services/context/index";
import { RestCtx } from "../../../../core/services/rest/RestProvider";
import { sanitize } from "../../../../core/lib/ultils"; 

export default function useStock(props: any) {
  const app = useContext(AppContext);
  const [image, setImage] = useState();
  const [file, onLoadFile] = useState<any>();
  const { register, reset, setValue, handleSubmit } = useForm();
  const rest = useContext(RestCtx);
  const [fetch] = useLazyQuery(GET_FULL_STOCKS, {
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    reset();
    setImage(props.stock?.file);
  }, [app.preview]);

  function handleError(error: any) {
    console.log(error.message);
  }

  function onUpdate() {
    alert("Stock has been created!");
    reset();
    fetch();
  }

  async function submit(brut: any) {
    try {
      app.setLoading(true);
      const data = sanitize({ ...brut, file: file?.file });
      console.log(data, "submit update stock");
      const response = await rest.mutate("PUT", props?.stock?.id, {
        entry: { ...data?.entry, provider: data?.provider },
        product: data?.product,
        file: data?.file,
        ...data?.stock,
      });
      onUpdate();
    } catch (error) {
      handleError(error);
    } finally {
      app.setLoading(false);
    }
  }

  return {
    setValue,
    onLoadFile,
    register,
    submit,
    handleSubmit,
    app,
    image,
    stock: props.stock,
  };
}
