import React from "react";
import style from "./style.module.scss";
import useChats from "./useChats";
import ChatBox from "../../../../core/components/chatbox/ChatBox";
import { BiSupport } from "react-icons/bi";
import Avatar from "../../../../core/components/avatar/Avatar";

export default function Chats(props: any) {
  const {} = useChats(props);
  return (
    <div className={style.chats}>
      <div className={style.users}>
        <div className={style.user}>
          <Avatar style={style} />
          <button type="button" className={style.infos} onClick={() => {}}>
            <div className={style.username}>"onLine.username"</div>
            <div className={style.phone}>"onLine.phone"</div>
          </button>
        </div>
      </div>
      <div className={style.chat}>
        <ChatBox
          icon={<BiSupport />}
          title={"dest username"}
          messages={[]}
          onClose={() => {}}
          onSend={(msg: any) => {}}
        />
      </div>
    </div>
  );
}
