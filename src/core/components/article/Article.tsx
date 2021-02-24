import React from "react";
import style from "./style.module.scss";
import { fileUrl } from "../../lib/ultils";

export default function Article({
  onClick,
  notice,
  title,
  descriptions,
  data,
}: {
  title?: string;
  data: any;
  descriptions?: any;
  notice?: any;
  onClick?: () => void;
}) {
  function renderArticle({ isOpen }: { isOpen?: boolean }) {
    return (
      <article className={style.article}>
        <section>
          <div className={style.thumb}>
            <img src={fileUrl(data.file)} />
          </div>
          <aside>
            <div className={style.infos}>
              <div className={style.title}>
                {title || data?.product?.specie}
              </div>
              <div className={style.description}>
                <div>{data?.product?.mark}</div>
                {descriptions ? (
                  descriptions
                ) : (
                  <div>
                    {data?.product?.variety} {data?.product?.container}
                  </div>
                )}
              </div>
            </div>
          </aside>
        </section>
        <section className={style.pricing}>
          <div className={style.price}>
            <span className={style.currency}>{data?.currency || "$"}</span>
            <span className={style.amount}>{data?.price || "-"}</span>
            <span className={style.strike}>{data.oldPrice || ""}</span>
          </div>
          {notice && <aside>{notice}</aside>}
        </section>
      </article>
    );
  }
  return (
    <React.Fragment>
      <button type="button" className={style.wrapper} onClick={onClick}>
        {renderArticle({})}
      </button>
    </React.Fragment>
  );
}
