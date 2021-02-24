import React from "react";
import style from "./style.module.scss";
import useStocks from "./useStocks";
import Loader from "../../../../core/components/loader";
import Article from "../../../../core/components/article/Article";
import Stock from "../stock";

export default function Stocks(props: any) {
  const { getDesc, app, filter, loading } = useStocks(props);
  return (
    <div className={style.stocks}>
      <div className={style.content}>
        <div className={style.items}>
          {filter().map((o: any, idx: number) => (
            <Article
              key={idx}
              data={o.node}
              title={o.node?.product?.container}
              descriptions={getDesc(o.node)}
              onClick={() =>
                app.setPreview({
                  name: "sideRight",
                  component: <Stock stock={o.node} />,
                })
              }
            />
          ))}
        </div>
      </div>
      {loading && <Loader />}
    </div>
  );
}
