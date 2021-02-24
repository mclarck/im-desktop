import React from "react"; 
import { MdMail, MdPhone } from "react-icons/md";
import { t } from "../../../locale";
import Field from "../field";

export default function StockField({
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
      <div className={`${style.field} ${style["grid-2"]}`}>
        <Field label={t("Quantity")} error={error?.quantity} iconRight={<MdMail />}>
          <input
            type="text"
            defaultValue={defaultValue?.quantity}
            name="stock.quantity"
            ref={register}
          />
        </Field>
        <Field label={t("Quantity Av")} error={error?.quantityAv} iconRight={<MdPhone />}>
          <input
            type="text"
            defaultValue={defaultValue?.quantityAv}
            name="stock.quantityAv"
            ref={register}
          />
        </Field>
      </div>
      <div className={`${style.field} ${style["grid-2"]}`}>
        <Field label={t("Curracy")} error={error?.devise} iconRight={<MdMail />}>
          <input
            type="text"
            defaultValue={defaultValue?.devise}
            name="stock.devise"
            ref={register}
          />
        </Field>
        <Field label={t("Price")} error={error?.price} iconRight={<MdPhone />}>
          <input
            type="text"
            defaultValue={defaultValue?.price}
            name="stock.price"
            ref={register}
          />
        </Field>
      </div>
      <div className={`${style.field} ${style["grid-2"]}`}>
        <Field label={t("Shipping Cost")} error={error?.shipping} iconRight={<MdMail />}>
          <input
            type="text"
            defaultValue={defaultValue?.shipping}
            name="stock.shipping"
            ref={register}
          />
        </Field>
        <Field label={t("Shipping Additional")} error={error?.shippingAdditional} iconRight={<MdPhone />}>
          <input
            type="text"
            defaultValue={defaultValue?.shippingAdditional}
            name="stock.shippingAdditional"
            ref={register}
          />
        </Field>
      </div>
      <div className={`${style.field} ${style["grid-2"]}`}>
        <Field label={t("Old Price")} error={error?.oldPrice} iconRight={<MdMail />}>
          <input
            type="text"
            defaultValue={defaultValue?.oldPrice}
            name="stock.oldPrice"
            ref={register}
          />
        </Field>
        <Field label={t("Tax per unit")} error={error?.tax} iconRight={<MdPhone />}>
          <input
            type="text"
            defaultValue={defaultValue?.tax}
            name="stock.tax"
            ref={register}
          />
        </Field>
      </div>
    </div>
  );
}
