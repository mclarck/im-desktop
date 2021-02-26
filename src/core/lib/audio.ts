import { Howl } from "howler";
import path from "path";

export default class Audio {
  static newMsg() {
    alert("will play audio")
    let audioPath = path.join(__dirname, "src", "core", "resources", "audio");
    const sound = new Howl({
      src: [
        path.join(audioPath, "system.mp3"),
        path.join(audioPath, "system.m4r"),
        path.join(audioPath, "system.ogg"),
      ],
    });
    console.log(sound);
    sound.play();
  }
}
