import React from "react";
import style from "./style.module.scss";

export default function Billing({ bills }:any) {
  return (
    <div className={style.Billing}>
      {bills?.map((bill:any, idx:any) => {
        return (
          <div
            key={idx}
            className={`${style.bill} ${bill.isTotal ? style.total : ""}`}
          >
            <div className={style.name}>{bill.name}</div>
            <div className={style.value}>{bill.value}</div>
          </div>
        );
      })}
    </div>
  );
}
