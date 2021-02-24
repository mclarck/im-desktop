import React from "react";
import { BsShieldLock } from "react-icons/bs";
import { MdMail, MdPhone } from "react-icons/md";
import { t } from "../../../locale";
import Field from "../field";

export default function EntryField({
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
        <Field label={t("Branch")} error={error?.branch} iconRight={<MdMail />}>
          <input
            type="text"
            defaultValue={defaultValue?.branch}
            name="branch"
            ref={register}
          />
        </Field>
        <Field label={t("Receipt")} error={error?.receipt} iconRight={<MdPhone />}>
          <input
            type="text"
            defaultValue={defaultValue?.receipt}
            name="receipt"
            ref={register}
          />
        </Field>
      </div>
      <div className={`${style.field} ${style["grid-2"]}`}>
        <Field label={t("Sent At")} error={error?.sent} iconRight={<MdMail />}>
          <input
            type="text"
            defaultValue={defaultValue?.sent}
            name="sent"
            ref={register}
          />
        </Field>
        <Field label={t("Stocked At")} error={error?.stocked} iconRight={<MdPhone />}>
          <input
            type="text"
            defaultValue={defaultValue?.stocked}
            name="stocked"
            ref={register}
          />
        </Field>
      </div>
    </div>
  );
}
