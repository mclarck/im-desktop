import React from "react"; 
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
      <div className={`${style.field} ${style.grid} ${style["grid-2"]}`}>
        <Field label={t("Branch")} error={error?.branch}>
          <input
            type="text"
            defaultValue={defaultValue?.branch}
            name="entry.branch"
            ref={register}
          />
        </Field>
        <Field label={t("Receipt")} error={error?.receipt}>
          <input
            type="text"
            defaultValue={defaultValue?.receipt}
            name="entry.receipt"
            ref={register}
          />
        </Field>
      </div>
      <div className={`${style.field} ${style.grid} ${style["grid-2"]}`}>
        <Field label={t("Sent At")} error={error?.sent}>
          <input
            type="text"
            defaultValue={defaultValue?.sent}
            name="entry.sent"
            ref={register}
          />
        </Field>
        <Field label={t("Stocked At")} error={error?.stocked}>
          <input
            type="text"
            defaultValue={defaultValue?.stocked}
            name="entry.stocked"
            ref={register}
          />
        </Field>
      </div>
    </div>
  );
}
