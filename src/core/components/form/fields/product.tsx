import React from "react"; 
import { MdMail, MdPhone } from "react-icons/md";
import { t } from "../../../locale";
import Field from "../field";

export default function ProductField({
  style,
  register,
  error,
  defaultValue,
}: {
  style: any;
  register: any;
  error?: any;
  defaultValue?: any;
  onBlur?: () => void;
}) {
  return (
    <div>
      <div className={`${style.field}`}>
        <Field label={t("Specie")} error={error?.specie}>
          <input
            type="text"
            defaultValue={defaultValue?.specie}
            name="product.specie"
            ref={register}
          />
        </Field>
        <Field label={t("Mark")} error={error?.mark}>
          <input
            type="text"
            defaultValue={defaultValue?.mark}
            name="product.mark"
            ref={register}
          />
        </Field>
      </div>
      <div className={`${style.field}`}>
        <Field label={t("Variety")} error={error?.variety}>
          <input
            type="text"
            defaultValue={defaultValue?.variety}
            name="product.variety"
            ref={register}
          />
        </Field>
        <Field label={t("Container")} error={error?.container}>
          <input
            type="text"
            defaultValue={defaultValue?.container}
            name="product.container"
            ref={register}
          />
        </Field>
      </div>
    </div>
  );
}
