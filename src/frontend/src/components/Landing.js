import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import styles from './Landing.module.css';
import Hero from './Hero/Hero';

export default function Landing() {
  return (
    <>
      <div className={styles.purple_sphere}></div>
      <Navbar />
      <Hero />
      <Outlet />
    </>
  );
}
