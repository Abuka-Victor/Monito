import React from 'react';
import styles from './Notifications.module.css';

function Notifications() {
  return (
    <div className={styles.Notifications}>
      <h1>Notification</h1>
      <div className={styles.notif_body}>
        <div className={styles.notif_placeholder}>
          <h3>Squeaky Clean! ✨</h3>
          <p>When you begin to get notifications they will show up here</p>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
