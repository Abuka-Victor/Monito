import React from 'react';
import styles from './Hero.module.css';
import image from './hero-image.png';
import alogo from './apple.png';
import plogo from './google-play-icon.png';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero_text}>
          <h2>Declutter your life</h2>
          <p>The app for busy students with tight deadlines</p>
          <Link className={styles.hero_text_login} to="/reg/login">
            Login
          </Link>
          <Link className={styles.hero_text_sign} to="/reg/signup">
            Sign Up
          </Link>
        </div>
        <div>
          <img className={styles.hero_image} src={image} alt="Hero" />
        </div>
      </div>
      <div className={styles.banner}>
        <h3>Coming soon to your device</h3>
        <img className={styles.banner_logo} src={alogo} alt="Apple logo" />
        <img
          className={styles.banner_logo}
          src={plogo}
          alt="Google Play Logo"
        />
      </div>
    </>
  );
}

export default Hero;
