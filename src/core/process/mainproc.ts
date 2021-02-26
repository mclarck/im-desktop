import { ipcMain } from "electron";
import Audio from "../lib/audio";

export default class MainProc {
  private app: any;
  private root: any;
  constructor(app: any, options: { root: any }) {
    this.app = app;
    this.root = options?.root;
  }

  exec() {
    this.loadEventManager();
  }

  private loadEventManager() {
    if (this.app) {
      this.loadWindowEventManager();
      this.loadAppEventManager();
    }
  }

  private loadAppEventManager() {
    ipcMain.on("quit", (event: any, arg: any) => {
      this.app?.quit();
    });
  }

  private loadWindowEventManager() {
    ipcMain.on("set-window-title", (event: any, arg: any) => {
      this.root?.setTitle(arg);
    });
    ipcMain.on("set-window-size", (event: any, arg: any) => {
      this.root?.setSize(arg?.width, arg?.height, arg?.animate);
      this.root?.center();
    });
    ipcMain.on("set-window-bounds", (event: any, arg: any) => {
      this.root?.setBounds(arg);
    });
    ipcMain.on("new-message", (event: any, arg: any) => { 
      this.root?.webContents.openDevTools();
    });
  }
}
