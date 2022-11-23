import React from 'react';
import Navbar from './Navbar/Navbar';
import styles from './Dashboard.module.css';
import Home from './Home/Home';

function Dashboard() {
  return (
    <div className={styles.Dashboard}>
      <Navbar />
      <Home />
    </div>
  );
}

export default Dashboard;
