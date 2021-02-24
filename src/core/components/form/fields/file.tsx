import React from "react";
import ImagePicker from "../../imagePicker/ImagePicker";
import { fileUrl } from "../../../lib/ultils";

export default function FileField({
  style,
  register,
  setValue,
  error,
  defaultValue,
}: {
  style: any;
  register: any;
  setValue: Function;
  error?: any;
  defaultValue?: any;
  onBlur?: () => void;
}) {
  return (
    <div>
      <div className={`${style.field}}`}>
        <div className={style.picture}>
          <ImagePicker
            onChange={(val: any) => setValue({ image: val })}
            preview={fileUrl(defaultValue?.image)}
          />
          <input
            type="hidden"
            name="file.id"
            ref={register}
            defaultValue={defaultValue?.file?.id}
          />
        </div>
      </div>
    </div>
  );
}
