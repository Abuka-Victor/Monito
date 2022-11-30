import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styles from './Calendar.module.css';
import 'react-calendar/dist/Calendar.css';

function Calendars() {
  const [date, setDate] = useState(new Date());
  return (
    <div className={styles.Calendar}>
      <h1>Calendar</h1>
      <div className={styles.calendar__container}>
        <Calendar
          className={styles.calendar__main}
          onChange={setDate}
          value={date}
        />
      </div>
    </div>
  );
}

export default Calendars;
