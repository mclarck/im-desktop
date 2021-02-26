import React from "react";
import style from "./style.module.scss";

const Avatar = (props: any) => {
  return (
    <button type="button" className={style.avatar} onClick={props.onClick}>
      <img src={props.img || "https://picsum.photos/100/100"} alt="avatar" />
    </button>
  );
};

export default Avatar;
