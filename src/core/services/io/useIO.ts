import { useContext, useEffect, useState } from "react";
import { Manager } from "socket.io-client";
import { AppContext } from "../../../core/services/context";
import Storager from "../storager";
import AppNotification from "../../lib/notification";
import Audio from "../../lib/audio";

function useIO() {
  const app = useContext(AppContext);
  const [chat, setChat] = useState<any>();
  const [anal, setAnal] = useState<any>();

  const onError = (e: any) => console.log(e.message);
  const sendMsgToServer = async (msg: any) => {};
  const onJoin = (payload: any) => {};
  const onMsg = (payload: any) => {
    const store = new Storager(app.company);
    if (!store.hasVal("messages")) store.setVal("messages", []);
    const msges: any[] = store.getVal("messages");
    if (payload?.content && payload?.content !== "") msges.push(payload);
    store.setVal("messages", msges);
    if (payload?.sender?.phone !== app?.token?.phone) {
      Audio.newMsg();
      AppNotification.notify({
        id: "New Message",
        options: { title: "New Message", body: "You have a new message" },
      });
    }
  };
  const onLastUsers = (payload: any) => {
    const onlines = Object.values(payload?.onlines);
    app.setOnlines(onlines);
  };
  const onAnalEvent = (payload: any) => {
    if (payload?.content?.type == "new:order") {
      Audio.newOrder();
      AppNotification.notify({
        id: "New Order",
        options: { title: "New Order", body: "You have a new Order" },
      });
    }
  };
  const handleChat = (socket: SocketIOClient.Socket) => {
    socket.emit("join", { room: app?.company }); // we need to join a room
    socket.emit("register", { content: app?.token }); // client need to register
    socket.on("join", onJoin);
    socket.on("message", onMsg);
    socket.on("last:users", onLastUsers);
  };
  const handleAnal = (socket: SocketIOClient.Socket) => {
    socket.emit("join", { room: "analytic@" + app?.company });
    socket.on("message", onAnalEvent);
  };
  const cleanChat = (socket: SocketIOClient.Socket) => {
    if (socket) {
      socket.off("join", onJoin);
      socket.off("message", onMsg);
      socket.off("last:users", onLastUsers);
      socket.disconnect();
    }
  };
  const cleanAnal = (socket: SocketIOClient.Socket) => {
    if (socket) {
      socket.off("message", onAnalEvent);
      socket.disconnect();
    }
  };
  useEffect(() => {
    console.log(app);
    const manager = new Manager(app?.io?.uri, app?.io?.options);
    const chat = manager.socket("/chat");
    const anal = manager.socket("/analytic");
    handleChat(chat);
    handleAnal(anal);
    setChat(chat);
    setAnal(anal);
    return () => {
      cleanChat(chat);
      cleanAnal(anal);
    };
  }, []);

  return { chatIO: chat, analyticIO: anal };
}

export default useIO;
