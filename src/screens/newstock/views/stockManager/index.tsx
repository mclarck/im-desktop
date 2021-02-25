import React from "react";
import style from "./style.module.scss";
import useStockManager from "./useStockManager";
import FileField from "../../../../core/components/form/fields/file";
import {
  ProductField,
  StockField,
  EntryField,
  ProviderField,
} from "../../../../core/components/form/fields";
import { t } from "../../../../core/locale";

export default function StockManager(props: any) {
  const { onLoadFile, register, submit, handleSubmit, app } = useStockManager(
    props
  );
  return (
    <div className={style.stockManager}>
      <form className={style.form} onSubmit={handleSubmit(submit)}>
        <div className={style.header}>
          <FileField
            onLoadFile={onLoadFile}
            register={register}
            style={style}
          />
        </div>
        <div className={style.body}>
          <ProductField register={register} style={style} />
          <StockField register={register} style={style} />
          <EntryField register={register} style={style} />
          <ProviderField register={register} style={style} />
        </div>
        <div className={style.footer}>
          <button type="submit" className="btn btn-success">
            {t("Create Stock")}
          </button>
        </div>
      </form>
    </div>
  );
}
