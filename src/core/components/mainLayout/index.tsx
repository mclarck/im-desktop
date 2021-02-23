import React from "react";
import style from "./style.module.scss";
import useMainLayout from "./useMainLayout";

export default function MainLayout(props: any) {
  const {} = useMainLayout(props);
  return <div className={style.mainLayout}>{props.children}</div>;
}
