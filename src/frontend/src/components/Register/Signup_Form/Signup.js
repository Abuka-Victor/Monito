import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Signup.module.css';

function Signup(props) {
  return (
    <div className={styles.form_container}>
      <Link to="/" className={styles.back_button}>
        Back
      </Link>
      <form action="" className={styles.form}>
        <div className={styles.form_group}>
          <label htmlFor="email">First Name</label>
          <input type="text" placeholder="Enter your First Name" />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="email">Last Name</label>
          <input type="text" placeholder="Enter your Last Name" />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="example@email.com" />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="password">Confirm Password</label>
          <input type="password" placeholder="Enter your password again" />
        </div>
        <button>Sign Up</button>
      </form>
      <div>
        <div>
          <p>Have an account?</p>
          <button onClick={props.changeOption}>Log In</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
