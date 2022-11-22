import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

function Login(props) {
  const [body, setBody] = useState({
    email: '',
    password: '',
  });

  const onChangeHandler = (e) => {
    if (e.target.getAttribute('type') === 'email') {
      setBody((body) => {
        const newBody = { ...body };
        newBody.email = e.target.value;
        return newBody;
      });
    }
    if (e.target.getAttribute('type') === 'password') {
      setBody((body) => {
        const newBody = { ...body };
        newBody.password = e.target.value;
        return newBody;
      });
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(body);
  };

  return (
    <div className={styles.form_container}>
      <Link to="/" className={styles.back_button}>
        Back
      </Link>
      <form onSubmit={onSubmitHandler} className={styles.form}>
        <div className={styles.form_group}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="example@email.com"
            onChange={onChangeHandler}
            value={body.email}
            required
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={onChangeHandler}
            value={body.password}
            required
          />
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
