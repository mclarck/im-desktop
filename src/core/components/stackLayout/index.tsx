import React from "react";
import MainMenu from "../mainMenu";
import StatusBar from "../statusBar";
import TopBar from "../topBar";
import style from "./style.module.css";
import useStackLayout from "./useStackLayout";

export default function StackLayout(props: any) {
  const {} = useStackLayout(props);
  return (
    <div id={style.stackLayout}>
      <div id={style.wrapr}>
        <div id={style.sideMenu}>
          <MainMenu />
        </div>
        <div id={style.container}>
          <div id={style.topBar}>
            <TopBar />
          </div>
          <div id={style.content}>{props.children}</div>
        </div>
        <div id={style.sideRight}></div>
      </div>
      <div id={style.footer}>
        <StatusBar />
      </div>
    </div>
  );
}
