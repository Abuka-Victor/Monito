import React from 'react';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.Home}>
      <div className={styles.top}>
        <h1>Good Morning Victor</h1>
      </div>
      <div className={styles.bottom}>
        <h2>Time Table</h2>
      </div>
    </div>
  );
}

export default Home;
