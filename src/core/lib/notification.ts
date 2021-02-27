export default class AppNotification {
  static async notify(payload: any) {
    try {
      if (!("Notification" in window)) {
        console.log("unsupported notification api");
      } else {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            new Notification(payload?.id, payload.options);
          }
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}
