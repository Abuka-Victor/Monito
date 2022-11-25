import React from 'react';
import styles from './Modal.module.css';

function Modal({ open, close }) {
  if (!open) return null;
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <p onClick={close}>X</p>
        <h1>Hello world</h1>
      </div>
    </div>
  );
}

export default Modal;
