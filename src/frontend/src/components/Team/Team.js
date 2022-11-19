import React from 'react';
import styles from './Team.module.css';
import me from './me.jpg';
import team_2 from './team_2.jpg';
import team_3 from './team_3.jpg';

function Team() {
  return (
    <div className={styles.Team_container}>
      <h2>Meet our Team</h2>
      <div className={styles.Team}>
        <div className={styles.Team_card}>
          <img src={me} alt="Team member" />
          <h3>Victor Abuka</h3>
          <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit."</p>
        </div>
        <div className={styles.Team_card}>
          <img src={team_2} alt="Team member" />
          <h3>Maureen Sanders</h3>
          <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit."</p>
        </div>
        <div className={styles.Team_card}>
          <img src={team_3} alt="Team member" />
          <h3>Antonio Fernandez</h3>
          <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit."</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
