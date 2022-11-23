import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.Navbar}>
      <div className={styles.top}>
        <Link>
          <box-icon type="solid" name="home" color="white" size="md"></box-icon>
        </Link>
        <Link>
          <box-icon name="bell" type="solid" color="white" size="md"></box-icon>
        </Link>
        <Link>
          <box-icon
            name="calendar"
            type="solid"
            color="white"
            size="md"
          ></box-icon>
        </Link>
        <Link>
          <box-icon name="compass" color="white" size="md"></box-icon>
        </Link>
      </div>
      <div className={styles.bottom}>
        <Link>
          <box-icon name="cog" type="solid" color="white" size="md"></box-icon>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
