import React from "react";
import Link from "../link";
import style from "./style.module.css";
import useTopBar from "./useTopBar";

export default function TopBar(props: any) {
  const {} = useTopBar(props);
  return (
    <nav className={style.topBar}>
      <ul>
        <li>
          <Link size="sm">Screen 1</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link size="sm">Screen 2</Link>
        </li>
      </ul>
    </nav>
  );
}
