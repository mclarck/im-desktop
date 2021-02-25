import React from "react";
import MainMenu from "../mainMenu";
import StatusBar from "../statusBar";
import style from "./style.module.scss";
import useStackLayout from "./useStackLayout";

export default function StackLayout(props: any) {
  const { app } = useStackLayout(props);
  return (
    <div id={style.stackLayout}>
      <div id={style.wrapr}>
        <div id={style.sideMenu}>
          <MainMenu />
        </div>
        <div id={style.container}>{props.children}</div>
        {app?.preview?.sideRight && (
          <div id={style.sideRight}>{app?.preview?.sideRight}</div>
        )}
      </div>
      <div id={style.footer}>
        <StatusBar />
      </div>
    </div>
  );
}
