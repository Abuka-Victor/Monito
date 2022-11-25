import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div>
        <h1>
          <Link className={styles.navbar_header_link} to="/">
            Monito
          </Link>
        </h1>
      </div>
      <ul className={styles.navbar_ul}>
        <li>
          <Link className={styles.navbar_ul_link} to="/about">
            About
          </Link>
        </li>
        {/** 
        <li>
          <Link className={styles.navbar_ul_link} to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className={styles.navbar_ul_link} to="/faq">
            FAQs
          </Link>
  </li> **/}
        <li>
          <Link className={styles.navbar_ul_link} to={`/reg/login`}>
            Log In
          </Link>
        </li>
        <li>
          <Link className={styles.navbar_ul_link} to="/reg/signup">
            Sign Up
          </Link>
        </li>
      </ul>
    </div>
  );
}
