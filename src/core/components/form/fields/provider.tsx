import React from "react";
import { MdMail, MdPhone, MdLocationOn } from "react-icons/md";
import { t } from "../../../locale";
import Field from "../field";

export default function ProviderField({
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
        <Field label={t("Provider Name")} error={error?.name}>
          <input
            type="text"
            defaultValue={defaultValue?.name}
            name="provider.name"
            ref={register}
          />
        </Field>
      </div>
      <div className={`${style.field} ${style.grid} ${style["grid-2"]}`}>
        <Field label={t("Alias")} error={error?.alias}>
          <input
            type="text"
            defaultValue={defaultValue?.alias}
            name="provider.alias"
            ref={register}
          />
        </Field>
        <Field label={t("Phone")} error={error?.phone} iconRight={<MdPhone />}>
          <input
            type="text"
            defaultValue={defaultValue?.phone}
            name="provider.phone"
            ref={register}
          />
        </Field>
      </div>
      <div className={`${style.field}`}>
        <Field
          label={t("Address")}
          error={error?.address}
          iconRight={<MdLocationOn />}
        >
          <input
            type="text"
            defaultValue={defaultValue?.address}
            name="provider.address"
            ref={register}
          />
        </Field>
      </div>
    </div>
  );
}
