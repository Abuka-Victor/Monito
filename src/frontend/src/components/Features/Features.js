import React from 'react';
import org from './organize-img.svg';
import checkbook from './checkbook.svg';
import { Link } from 'react-router-dom';
import styles from './Features.module.css';

function Features() {
  return (
    <div className={styles.Features_container}>
      <div className={styles.Features}>
        <div className={styles.left}>
          <img src={org} alt="" />
        </div>
        <div className={styles.right}>
          <p className={styles.extra_one}>Organize</p>
          <h3>Stay Organized</h3>
          <p className={styles.info}>
            Avoid clutter and easily reach your goals with dashboards that are
            easy to customize
          </p>
          <Link to="/sign">Try for free</Link>
        </div>
      </div>
      <div className={styles.Features}>
        <div className={styles.right}>
          <p className={styles.extra_two}>Prioritize</p>
          <h3>Stay Focused</h3>
          <p className={styles.info}>
            Never miss another important annoucement again. Easily get notified
            on the lastest things to do.
          </p>
          <Link to="/sign">Get Started</Link>
        </div>
        <div className={styles.left}>
          <img src={checkbook} alt="" />
        </div>
      </div>
      <div className={styles.green_sphere}></div>
    </div>
  );
}

export default Features;
