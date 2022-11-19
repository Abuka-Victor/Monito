import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import styles from './Landing.module.css';
import Hero from './Hero/Hero';
import Features from './Features/Features';
import Team from './Team/Team';
import Email from './Email/Email';
import Footer from './Footer/Footer';

export default function Landing() {
  return (
    <>
      <div className={styles.purple_sphere}></div>
      <Navbar />
      <Hero />
      <Features />
      <Team />
      <Email />
      <Footer />
      <Outlet />
    </>
  );
}
