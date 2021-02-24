import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../../../../core/services/context/index";

export default function useStock(props: any) {
  const app = useContext(AppContext);
  const [image, setImage] = useState();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    setImage(props.stock?.file);
  }, [app.preview]);

  function submit(data: any) {}

  return { register, submit, handleSubmit, app, image, stock: props.stock };
}
