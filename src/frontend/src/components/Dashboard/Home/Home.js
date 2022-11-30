import React from 'react';
import BoardList from './BoardList/BoardList';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.Home}>
      <div className={styles.top}>
        <h1>Good Morning Victor</h1>
        <h2>Your Boards</h2>
        <BoardList />
      </div>
      <div className={styles.bottom}>
        <h2>Time Table</h2>
        <div className={styles.time_table}>
          <div>
            <p>This feature is coming soon 😉</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
