import CONFIG from './config';
import NotificationHelper from './notificationHandler';

const WebSocketInitiator = {
  initialize(url) {
    const websocket = new WebSocket(url);
    websocket.onmessage = this._handleMessage;
  },
  _handleMessage(message) {
    const data = JSON.parse(message.data);
    console.log('data', data)
    NotificationHelper.sendNotification({
      title: 'Restaurant Hits on Jakarta'
    })
  }
}

export default WebSocketInitiator;
