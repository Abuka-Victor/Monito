import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className={styles.Footer_container}>
      <div className={styles.Footer}>
        <div className={styles.Footer_list}>
          <p>DEVELOPER</p>
          <p>FAQS</p>
          <p>COMMUNITY</p>
          <p>SUPPORT</p>
          <p>TERMS AND CONDITIONS</p>
          <p>PRICING</p>
          <p>LINKS</p>
          <p>ORGANIZATIONS</p>
        </div>
        <div className={styles.Footer_list}>
          <p>DEVELOPER</p>
          <p>FAQS</p>
          <p>COMMUNITY</p>
          <p>SUPPORT</p>
          <p>TERMS AND CONDITIONS</p>
          <p>PRICING</p>
          <p>LINKS</p>
          <p>ORGANIZATIONS</p>
        </div>
        <div className={styles.Footer_list}>
          <p>DEVELOPER</p>
          <p>FAQS</p>
          <p>COMMUNITY</p>
          <p>SUPPORT</p>
          <p>TERMS AND CONDITIONS</p>
          <p>PRICING</p>
          <p>LINKS</p>
          <Link to="/dashboard">ORGANIZATION</Link>
        </div>
      </div>
      <div className={styles.Footer_foot}>
        All Rights Reserved &copy; {new Date().getFullYear()} - Monito Inc
      </div>
    </div>
  );
}

export default Footer;
