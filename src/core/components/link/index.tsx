import React from "react";
import style from "./style.module.css";
import useLink from "./useLink";

export default function Link(props: any) {
  const { handle } = useLink(props);
  return (
    <button
      type="button"
      className={style.link + " btn btn-nav " + props.size || ""}
      onClick={handle}
    >
      <React.Fragment>
        {props.icon && (
          <div className="icon">
            <props.icon />
          </div>
        )}
        {props.children && <div>{props.children}</div>}
      </React.Fragment>
    </button>
  );
}
