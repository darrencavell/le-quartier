import NotificationHelper from './notificationHandler';

const WebSocketInitiator = {
  initialize(url) {
    const websocket = new WebSocket(url);
    websocket.onmessage = this._handleMessage;
  },
  _handleMessage(message) {
    const data = JSON.parse(message.data);
    NotificationHelper.sendNotification({
      title: `Restaurant Hits on Jakarta ${data.overview}`,
    });
  },
};

export default WebSocketInitiator;
