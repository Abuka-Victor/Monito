import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import styles from './Dashboard.module.css';
import Home from './Home/Home';
import Settings from './Settings/Settings';
import Notifications from './Notifications/Notifications';
import Explore from './Explore/Explore';
import Calendars from './Calendar/Calendar';

function Dashboard() {
  const [view, setView] = useState('home');

  let userView;

  switch (view) {
    case 'home':
      userView = <Home />;
      break;

    case 'notification':
      userView = <Notifications />;
      break;

    case 'calendar':
      userView = <Calendars />;
      break;

    case 'explore':
      userView = <Explore />;
      break;

    case 'settings':
      userView = <Settings viewControl={setView} />;
      break;
    default:
      userView = <Home />;
      break;
  }

  return (
    <div className={styles.Dashboard}>
      <Navbar viewControl={setView} />

      {userView}
    </div>
  );
}

export default Dashboard;
