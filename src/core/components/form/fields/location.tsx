import React from "react";
import { MdLocationOn } from "react-icons/md";
import { t } from "../../../locale";
import Field from "../field";
import Map from "../../map";
import { boolean } from "mathjs";

export default function LocationField({
  style,
  register,
  error,
  defaultValue,
  onBlur,
  nomap,
}: {
  style: any;
  register: any;
  error?: any;
  nomap?: boolean;
  defaultValue?: any;
  onBlur?: () => void;
}) {
  return (
    <React.Fragment>
      {nomap == false && <Map style={style} address={defaultValue?.address} />}
      <div className={style.field}>
        <Field
          label={t("Street")}
          iconRight={<MdLocationOn />}
          error={error?.address?.street}
        >
          <input
            type="text"
            name="address.street"
            defaultValue={defaultValue?.address?.street}
            ref={register}
            onBlur={onBlur}
          />
        </Field>
      </div>
      <div className={`${style.field} ${style.grid} ${style["grid-3"]}`}>
        <Field label={t("Street Number")} error={error?.address?.number}>
          <input
            type="text"
            name="address.number"
            defaultValue={defaultValue?.address?.number}
            ref={register}
            onBlur={onBlur}
          />
        </Field>
        <Field label={t("Apt")} error={error?.address?.apt}>
          <input
            type="text"
            name="address.apt"
            defaultValue={defaultValue?.address?.apt}
            ref={register}
            onBlur={onBlur}
          />
        </Field>
        <Field label={t("City")} error={error?.address?.city}>
          <input
            type="text"
            name="address.city"
            defaultValue={defaultValue?.address?.city}
            readOnly
            ref={register}
          />
        </Field>
      </div>
    </React.Fragment>
  );
}
