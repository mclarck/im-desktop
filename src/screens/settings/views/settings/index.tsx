import React from "react";
import style from "./style.module.scss";
import useSettings from "./useSettings";
import Map from "../../../../core/components/map";
import { FileField } from "../../../../core/components/form/fields";
import { t } from "../../../../core/locale";
import Loader from "../../../../core/components/loader";
import LocationField from "../../../../core/components/form/fields/location";
import Field from "../../../../core/components/form/field";
import { serializeBounds } from "../../../../core/lib/serializer";

export default function Settings(props: any) {
  const {
    address,
    bounds,
    setting,
    loading,
    onLoadFile,
    register,
    submit,
    handleSubmit,
  } = useSettings(props);
  return (
    <div className={style.settings}>
      <div className={style.map}>
        {address && <Map style={style} address={address} bounds={bounds} />}
      </div>
      <form className={style.form} onSubmit={handleSubmit(submit)}>
        <div className={style.header}>
          <FileField
            onLoadFile={onLoadFile}
            register={register}
            style={style}
          />
        </div>
        <div className={style.body}>
          <LocationField
            nomap
            register={register}
            style={style}
            defaultValue={setting}
          />
          <div className={style.field}>
            <Field label={t("Bounds")}>
              <textarea
                ref={register}
                defaultValue={serializeBounds(setting?.bounds)}
                name="bounds"
              ></textarea>
            </Field>
          </div>
        </div>
        <div className={style.footer}>
          <button type="submit" className="btn btn-success">
            {t("Apply")}
          </button>
        </div>
        {loading && <Loader />}
      </form>
    </div>
  );
}
