import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

function Login(props) {
  return (
    <div className={styles.form_container}>
      <Link to="/" className={styles.back_button}>
        Back
      </Link>
      <form action="" className={styles.form}>
        <div className={styles.form_group}>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="example@email.com" />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <button>Login</button>
      </form>
      <div>
        <div>
          <p>Don't have an account?</p>
          <button onClick={props.changeOption}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
