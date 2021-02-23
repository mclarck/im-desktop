import React, { useContext } from "react";
import RestManager from "./RestManager";
import conf from "../../../../app.config.js";
import { AppContext } from "../../services/context";

export function initRest(headers?: any) {
  return new RestManager({ uri: conf?.rest?.uri });
}

export const RestCtx = React.createContext<RestManager>(null);

const RestProvider = ({ children }: any) => {
  const app = useContext(AppContext);
  return <RestCtx.Provider value={app.rest}>{children}</RestCtx.Provider>;
};

export default RestProvider;
