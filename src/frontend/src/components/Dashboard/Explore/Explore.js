import React from 'react';
import styles from './Explore.module.css';

function Explore(props) {
  return (
    <div className={styles.Explore}>
      <h1>Explore</h1>
      <div className={styles.notif_body}>
        <div className={styles.notif_placeholder}>
          <h3>Feature coming soon 👨🏾‍💻</h3>
          <p>
            Soon you'll be able to explore all the different public boards 😉
          </p>
        </div>
      </div>
    </div>
  );
}

export default Explore;
