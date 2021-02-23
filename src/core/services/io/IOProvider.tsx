import React from "react";
import useIO from "./useIO";
import conf from "../../../../app.config.js";

export function initIO() {
  return { uri: conf?.io?.uri, options: conf?.io?.options };
}

export const ChatIO = React.createContext<SocketIOClient.Socket>(null);
export const AnalyticIO = React.createContext<SocketIOClient.Socket>(null);

export const SocketIOProvider = ({ children }: any) => {
  const { chatIO, analyticIO } = useIO();
  return (
    <ChatIO.Provider value={chatIO}>
      <AnalyticIO.Provider value={analyticIO}>{children}</AnalyticIO.Provider>
    </ChatIO.Provider>
  );
};
