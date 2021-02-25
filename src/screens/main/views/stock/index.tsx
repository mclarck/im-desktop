import React from "react";
import { FileField } from "../../../../core/components/form/fields";
import style from "./style.module.scss";
import useStock from "./useStock";
import ProductField from "../../../../core/components/form/fields/product";
import EntryField from "../../../../core/components/form/fields/entry";
import ProviderField from "../../../../core/components/form/fields/provider";
import StockField from "../../../../core/components/form/fields/stock";

export default function Stock(props: any) {
  const { register, onLoadFile, handleSubmit, submit, stock, image } = useStock(props);
  return (
    <div className={style.stock}>
      <form className={style.form} onSubmit={handleSubmit(submit)}>
        <div className={style.header}>
          <FileField
            onLoadFile={onLoadFile}
            register={register}
            style={style}
            defaultValue={{ image, file: stock?.file }}
          />
        </div>
        <div className={style.body}>
          <ProductField
            register={register}
            style={style}
            defaultValue={stock?.product}
          />
          <StockField register={register} style={style} defaultValue={stock} />
          <EntryField
            register={register}
            style={style}
            defaultValue={stock?.entry}
          />
          <ProviderField
            register={register}
            style={style}
            defaultValue={stock?.entry?.provider}
          />
        </div>
        <div className={style.footer}>
          <button type="submit" className="btn btn-success">
            Apply
          </button>
        </div>
      </form>
    </div>
  );
}
