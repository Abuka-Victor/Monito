import React, { useEffect, useState } from 'react';
import Navbar from './Navbar/Navbar';
import styles from './Dashboard.module.css';
import Home from './Home/Home';
import Settings from './Settings/Settings';
import Notifications from './Notifications/Notifications';
import Explore from './Explore/Explore';
import Calendars from './Calendar/Calendar';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../../config';

function Dashboard() {
  const [view, setView] = useState('home');
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const u_id = useParams().id;

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`${config.url}/api/user/${u_id}`);
        const userName = response.data.name;
        setName(userName);
      } catch (e) {
        navigate('/reg/login');
      }
    })();
  });

  let userView;

  switch (view) {
    case 'home':
      userView = <Home name={name} />;
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
