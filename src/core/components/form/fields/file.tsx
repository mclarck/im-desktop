import React, { useState } from "react";
import ImagePicker from "../../imagePicker/ImagePicker";
import { fileUrl } from "../../../lib/ultils";

export default function FileField({
  style,
  register,
  defaultValue,
  onLoadFile,
}: {
  style: any;
  register: any;
  error?: any;
  defaultValue?: any;
  onBlur?: () => void;
  onLoadFile?: (f: any) => void;
}) {
  return (
    <div>
      <div className={`${style.field}}`}>
        <div className={style.picture}>
          <ImagePicker
            onChange={(f) => onLoadFile(f)}
            preview={defaultValue && fileUrl(defaultValue?.image)}
          />
        </div>
      </div>
    </div>
  );
}
