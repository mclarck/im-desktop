import React from "react";
import style from "./style.module.scss";
import useChats from "./useChats";
import ChatBox from "../../../../core/components/chatbox/ChatBox";
import { BiSupport } from "react-icons/bi";
import Avatar from "../../../../core/components/avatar/Avatar";

export default function Chats(props: any) {
  const {
    send,
    filterConversation,
    clear,
    messages,
    onlines,
    dest,
    setDest,
    company,
  } = useChats(props);
  return (
    <div className={style.chats}>
      <div className={style.users}>
        {onlines?.map((o: any, idx: number) => (
          <div key={idx} className={style.user}>
            <Avatar style={style} onClick={() => setDest(o)} />
            <button
              type="button"
              className={style.infos}
              onClick={() => setDest(o)}
            >
              <div className={style.username}>{o?.username}</div>
              <div className={style.phone}>{o?.phone}</div>
            </button>
          </div>
        ))}
      </div>
      <div className={style.chat}>
        <ChatBox
          icon={<BiSupport />}
          title={dest?.username || company}
          messages={filterConversation(messages)}
          onClose={clear}
          onSend={send}
        />
      </div>
    </div>
  );
}
