const NotificationHelper = {
  async sendNotification({ title, options }) {
    if (!'Notification' in window) {
      console.error('Notification not supported!');
      return;
    }

    if (Notification.permission !== 'granted') {
      const status = await Notification.requestPermission();

      if (status === 'denied') {
        console.error('Notification denied!');
      } else if (status === 'default') {
        console.error('Permission closed!');
      }

      return;
    }

    const serviceWorkerRegistration = await navigator.serviceWorker.ready;
    serviceWorkerRegistration.showNotification(title, options);
  }
}

export default NotificationHelper;
