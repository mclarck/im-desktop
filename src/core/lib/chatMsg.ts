import { setMultiplicity } from "mathjs";

export default class ChatMsg {
  msg: any;
  sender: any;
  dest: any;
  room: any;

  constructor(sender: any, dest: any, msg: any,  room?: string) {
    this.msg = msg;
    this.sender = sender;
    this.dest = dest;
    if (room) this.room = room;
  }

  buildPayload() {
    let payload = {
      sender: this.sender,
      dest: this.dest,
      room: this.room,
      content: this.msg,
    };
    return payload;
  }
}
