import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../../../../core/services/context";
import { RestCtx } from "../../../..//core/services/rest";
import { sanitize } from "../../../../core/lib/ultils"; 

export default function useStockManager(props: any) {
  const app = useContext(AppContext);
  const { register, reset, setValue, handleSubmit } = useForm();
  const rest = useContext(RestCtx);
  const [file, onLoadFile] = useState<any>();

  function handleError(error: any) {
    console.log(error.message);
  }

  function onCreate() {
    alert("Stock has been created!");
    reset();
  }

  async function submit(brut: any) {
    try {
      app.setLoading(true); 
      const data = sanitize({ ...brut, file: file?.file });
      console.log(data,"submit create stock");
      const response = await rest.mutate("POST", `/api/stocks`, {
        entry: { ...data?.entry, provider: data?.provider },
        product: data?.product,
        file: data?.file,
        ...data?.stock,
      });
      onCreate();
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
  };
}
