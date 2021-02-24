import React from "react";
import { FileField } from "../../../../core/components/form/fields";
import style from "./style.module.scss";
import useStock from "./useStock";
import ProductField from "../../../../core/components/form/fields/product";
import EntryField from "../../../../core/components/form/fields/entry";
import ProviderField from "../../../../core/components/form/fields/provider";
import StockField from "../../../../core/components/form/fields/stock";

export default function Stock(props: any) {
  const { register, handleSubmit, submit, stock, image } = useStock(props);
  return (
    <div className={style.stock}>
      <form onSubmit={handleSubmit(submit)}>
        <FileField register={register} style={style} />
        <StockField register={register} style={style} />
        <ProductField register={register} style={style} />
        <EntryField register={register} style={style} />
        <ProviderField register={register} style={style} />
        <div className={style.field}>
          <button className="btn btn-success">Apply</button>
        </div>
      </form>
    </div>
  );
}
