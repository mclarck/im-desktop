import { app, Menu } from "electron";
import ScreenManager from "./screen";

export default class MenuManager {
  isMac: boolean;
  screenManager: ScreenManager;
  constructor() {
    this.isMac = process.platform === "darwin";
    this.screenManager = new ScreenManager();
  }
  build() {
    const menu = Menu.buildFromTemplate(this.getTemplate());
    Menu.setApplicationMenu(menu);
  }
  getTemplate() {
    let isMac = this.isMac;
    let template: any = [
      ...(isMac
        ? [
            {
              label: app.name,
              submenu: [
                { role: "about" },
                { type: "separator" },
                { role: "services" },
                { type: "separator" },
                { role: "hide" },
                { role: "hideothers" },
                { role: "unhide" },
                { type: "separator" },
                { role: "quit" },
              ],
            },
          ]
        : []),
      {
        label: "File",
        submenu: [
          {
            label: "New Stock",
            click: async () => {
              this.screenManager.create("NEWSTOCK", {
                title: "Create Stock",
                width: 420,
                height: 580,
              });
            },
          },
          {
            label: "Settings",
            click: async () => {
              this.screenManager.create("SETTINGS", {
                title: "Settings",
                width: 950,
                height: 580,
              });
            },
          },
          isMac ? { role: "close" } : { role: "quit" },
        ],
      },
      {
        label: "View",
        submenu: [
          { role: "reload" },
          { role: "forceReload" },
          { role: "toggleDevTools" },
          { type: "separator" },
          { role: "resetZoom" },
          { role: "zoomIn" },
          { role: "zoomOut" },
          { type: "separator" },
          { role: "togglefullscreen" },
        ],
      },
      {
        role: "help",
        submenu: [
          {
            label: "Learn More",
            click: async () => {
              const { shell } = require("electron");
              //   await shell.openExternal("https://electronjs.org");
            },
          },
        ],
      },
    ];
    return template;
  }
}
