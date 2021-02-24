import React from "react";
import { BsShieldLock } from "react-icons/bs";
import { MdMail, MdPhone } from "react-icons/md";
import { t } from "../../../locale";
import Field from "../field";
import ImagePicker from '../../imagePicker/ImagePicker';
import { fileUrl } from '../../../lib/ultils';

export default function FileField({
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
      <div className={`${style.field}}`}>
        <ImagePicker preview={fileUrl(defaultValue?.image)} />
      </div>
    </div>
  );
}
