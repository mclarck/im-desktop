import { useState, useEffect, useContext } from "react";
import { ChatIO } from "../../../../core/services/io/IOProvider";
import { AppContext } from "../../../../core/services/context";
import ChatMsg from "../../../../core/lib/chatMsg";
import Storager from "../../../../core/services/storager/index";
import { ipcRenderer } from "electron";

export default function useChats(props: any) {
  const chatIO = useContext(ChatIO);
  const app = useContext(AppContext);
  const [dest, setDest] = useState<any>();
  const [onlines, setOnlines] = useState([]);
  const [messages, setMessages] = useState([]);

  function send(msg: any) {
    if (!dest) alert("Please choose a recipient!");
    const chatMsg = new ChatMsg(app.token, dest, msg);
    if (chatIO) chatIO.emit("message", chatMsg.buildPayload());
  }

  function clear() {
    const store = new Storager(app.company);
    store.setVal("messages", []);
    onMsg();
  }

  function onMsg() {
    const store = new Storager(app.company);
    let msges: any[] = store.getVal("messages");
    msges = mapMsg(msges);
    setMessages(msges);
    ipcRenderer.send("new-message", {});
  }

  function filterConversation(msges: any[]) {
    return msges?.filter((msg: any) => {
      return (
        (msg?.sender?.phone === app?.token?.phone &&
          msg?.dest?.phone === dest?.phone) ||
        (msg?.sender?.phone === dest?.phone &&
          msg?.dest?.phone === app?.token?.phone)
      );
    });
  }

  function mapMsg(msges: any[]) {
    return msges.map((msg) => ({
      ...msg,
      isSender: msg?.sender?.phone === app?.token?.phone,
    }));
  }

  function cleanChatIO() {
    if (chatIO) {
      chatIO.off("message", onMsg);
    }
  }

  useEffect(() => {
    setOnlines(app?.onlines);
    if (chatIO) chatIO.on("message", onMsg);
    return () => {
      cleanChatIO();
    };
  }, [app?.onlines]);

  return {
    send,
    filterConversation,
    clear: clear,
    messages: messages,
    onlines: onlines,
    dest,
    setDest,
    company: app?.company,
  };
}
