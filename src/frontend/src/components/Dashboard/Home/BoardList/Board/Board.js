import React, { useState } from 'react';
import Modal from '../Modal';
import styles from './Board.module.css';

function Board() {
  const [open, setOpen] = useState(false);
  const red = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const boardStyle = {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
  };

  const textColor = (red, blue, green) => {
    let hsp = Math.sqrt(
      0.299 * (red * red) + 0.587 * (green * green) + 0.114 * (blue * blue)
    );

    if (hsp > 127.5) {
      return 'black';
    } else {
      return 'white';
    }
  };

  const textStyle = {
    color: `${textColor(red, blue, green)}`,
  };

  return (
    <div style={boardStyle} className={styles.Board}>
      <h1 style={textStyle}>GES</h1>
      <button onClick={() => setOpen(true)}>Show</button>
      <Modal open={open} close={() => setOpen(false)} />
    </div>
  );
}

export default Board;
