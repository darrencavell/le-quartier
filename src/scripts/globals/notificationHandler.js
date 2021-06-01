const NotificationHelper = {
  async sendNotification({ title, options }) {
    if (!('Notification' in window)) {
      // eslint-disable-next-line no-console
      console.error('Notification not supported!');
      return;
    }

    if (Notification.permission !== 'granted') {
      const status = await Notification.requestPermission();

      if (status === 'denied') {
        // eslint-disable-next-line no-console
        console.error('Notification denied!');
      } else if (status === 'default') {
        // eslint-disable-next-line no-console
        console.error('Permission closed!');
      }

      return;
    }

    const serviceWorkerRegistration = await navigator.serviceWorker.ready;
    serviceWorkerRegistration.showNotification(title, options);
  },
};

export default NotificationHelper;
