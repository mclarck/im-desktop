import { useEffect, useContext } from "react";
import { AppContext } from "../../services/context/index";
export default function useStackLayout(props: any) {
  const app = useContext(AppContext);
  useEffect(() => { 
  }, [app.preview]);
  return { app };
}
