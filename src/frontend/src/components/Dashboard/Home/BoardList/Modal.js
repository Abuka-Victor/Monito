import React from 'react';
import Announcement from './Announcement';
import styles from './Modal.module.css';

function Modal({ open, close }) {
  if (!open) return null;
  return (
    <div onClick={close} className={styles.overlay}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modal_head}>
          <h1>Announcements</h1>
          <div className={styles.close_btn}>
            <box-icon
              onClick={close}
              name="x"
              color="white"
              size="md"
            ></box-icon>
          </div>
        </div>
        <div className={styles.modal_body}>
          <Announcement />
          <Announcement />
          <Announcement />
          <Announcement />
          <Announcement />
          <Announcement />
          <Announcement />
          <Announcement />
          <Announcement />
          <Announcement />
          <Announcement />
          <Announcement />
          <Announcement />
          <Announcement />
          <Announcement />
          <Announcement />
          <Announcement />
        </div>
      </div>
    </div>
  );
}

export default Modal;
