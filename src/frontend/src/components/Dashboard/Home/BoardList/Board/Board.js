import React, { useState } from 'react';
import Modal from '../Modal';
import styles from './Board.module.css';

function Board() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.Board}>
      <h1>GES</h1>
      <button onClick={() => setOpen(true)}>Show</button>
      <Modal open={open} close={() => setOpen(false)} />
    </div>
  );
}

export default Board;
