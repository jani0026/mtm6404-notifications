import React, { useState } from 'react';
import notifications from './notifications';
import './App.css';

const App = () => {
  const [notificationList, setNotificationList] = useState(notifications);

  const clearNotification = (id) => {
    setNotificationList(notificationList.filter(notification => notification.id !== id));
  };

  const clearAllNotifications = () => {
    setNotificationList([]);
  };

  return (
    <div className="container">
      <div className="notifications-wrapper">
        <div className="header">
          <div className="header-text">
            <h1>Notifications</h1>
            <p>
              You have {notificationList.length} notification{notificationList.length !== 1 ? 's' : ''}
            </p>
          </div>
          {notificationList.length > 0 && (
            <button 
              onClick={clearAllNotifications}
              className="clear-all-button"
            >
              Clear All
            </button>
          )}
        </div>

        <div className="notifications-list">
          {notificationList.length === 0 ? (
            <p className="empty-message">No notifications</p>
          ) : (
            notificationList.map(notification => (
              <div key={notification.id} className="notification-card">
                <button
                  className="close-button"
                  onClick={() => clearNotification(notification.id)}
                >
                  ×
                </button>
                <h2 className="notification-name">
                  {notification.name}
                </h2>
                <p className="notification-message">
                  {notification.message}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;