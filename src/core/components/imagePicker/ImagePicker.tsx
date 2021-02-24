import React, { useRef, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { MdRefresh } from "react-icons/md";
import style from "./style.module.scss";
import { useEffect } from "react";

export type ImagePickerProps = {
  preview?: any;
  maxSize?: number;
  accept?: string;
  allow?: Array<string>;
  onChange?: (val?: any) => void;
};

const ImagePicker = (props: ImagePickerProps) => {
  const [preview, setpreview] = useState<any>();
  const input: any = useRef();

  useEffect(() => {
    setpreview((current:any)=>current = props.preview);
  }, [props.preview]);

  const handleChange = (e: any) => {
    const files = e.target.files;
    if (files) {
      if (files[0]) {
        const reader = new FileReader();
        const allowed: any = props.allow
          ? props.allow
          : ["jpg", "jpeg", "png", "svg", "gif"];

        const { name: fileName, size: fileSize } = files[0];
        const fileExtension = fileName.split(".").pop();
        const sizeLimit = 1024 * 1000 * (props.maxSize || 2); // 2Mb

        if (!allowed.includes(fileExtension)) {
          alert("file type not allowed");
          return reset();
        } else if (fileSize > sizeLimit) {
          alert(`file size too large, max: ${sizeLimit}Mb`);
          return reset();
        }

        reader.onload = (e: any) => {
          const b64 = btoa(e.target.result);
          const prefix = `data:image/${fileExtension};base64,`;
          const preview = `${prefix}${b64}`;
          setpreview(preview);
          props.onChange &&
            props.onChange({
              ext: fileExtension,
              mime: prefix,
              content: b64,
              size: fileSize,
            });
        };
        reader.readAsBinaryString(files[0]);
      }
    }
  };

  const reset = () => {
    if (input?.current) input.current.value = null;
    setpreview(null);
    props.onChange && props.onChange(null);
  };

  return (
    <div className={style.imagePicker}>
      {preview && (
        <div className={style.preview}>
          <img src={preview} />
        </div>
      )}
      <label>
        <div className={style.icon}>
          <BiImageAdd />
        </div>
        <input
          type="file"
          ref={input}
          accept={props.accept}
          onChange={handleChange}
        />
      </label>
      {preview && (
        <button className={style.reset} type="button" onClick={reset}>
          <MdRefresh />
        </button>
      )}
    </div>
  );
};

export default ImagePicker;
