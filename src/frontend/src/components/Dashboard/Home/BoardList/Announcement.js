import React from 'react';
import styles from './Announcement.module.css';

function Announcement() {
  return (
    <div className={styles.announcement}>
      <h3>GES Test on Friday</h3>
      <h5>Posted: 27/11/2022</h5>
      <h5>Due by: 29/11/2022</h5>
    </div>
  );
}

export default Announcement;
