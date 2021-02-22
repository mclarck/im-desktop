import { BrowserWindow } from "electron"; 

declare const MAIN_WINDOW_WEBPACK_ENTRY: any;
declare const SETTINGS_WINDOW_WEBPACK_ENTRY: any;
declare const NEWSTOCK_WINDOW_WEBPACK_ENTRY: any;

export default class ScreenManager {
    screens: Array<{ name: string; url: any }>;

    constructor() {
        this.screens = [
            { name: "HOME", url: MAIN_WINDOW_WEBPACK_ENTRY },
            { name: "NEWSTOCK", url: NEWSTOCK_WINDOW_WEBPACK_ENTRY },
            { name: "SETTINGS", url: SETTINGS_WINDOW_WEBPACK_ENTRY },
        ];
    }
    getScreen(name: string) {
        let screen;
        this.screens.map((s) => {
            if (s.name == name) screen = s;
        });
        return screen;
    }
    create(name: string, options?: any) {
        let screen: any = this.getScreen(name) ?? null;
        if (screen) {
            const win = new BrowserWindow({
                title: name,
                width: 1280,
                height: 680,
                webPreferences: {
                    nodeIntegration: true,
                    nativeWindowOpen: true,
                },
                ...options,
            });
            win.loadURL(screen.url);
            return win;
        }
        return null;
    }

    static hasScreens() {
        return ScreenManager.getAllScreens().length === 0;
    }

    static getAllScreens() {
        return BrowserWindow.getAllWindows();
    }

    static getFocused() {
        return BrowserWindow.getFocusedWindow();
    }
}
