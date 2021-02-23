import React from "react";
import style from "./style.module.css";
import useStocks from "./useStocks";

export default function Stocks(props: any) {
  const { filter, onSelect } = useStocks(props);
  return (
    <div className={style.stocks}>
      <div className={style.items}>
        {filter().map((o: any, idx: number) => (
          <div>{o.node.id}</div>
        ))}
      </div>
    </div>
  );
}
