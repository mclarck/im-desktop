import { Howl } from "howler";
import path from "path";

export default class Audio {
  static newMsg() {
    const sound = new Howl({
      src: [
        "./audio/message.mp3",
        "./audio/message.m4r",
        "./audio/message.ogg",
      ],
    });
    console.log(sound);
    sound.play();
  }
  static newOrder() { 
    const sound = new Howl({
      src: [
        "./audio/system.mp3",
        "./audio/system.m4r",
        "./audio/system.ogg",
      ],
    });
    console.log(sound);
    sound.play();
  }
}
