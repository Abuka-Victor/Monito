import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import styles from './Signup.module.css';

function Signup(props) {
  const [body, setBody] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
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
    if (e.target.getAttribute('name') === 'firstname') {
      setBody((body) => {
        const newBody = { ...body };
        newBody.first_name = e.target.value;
        return newBody;
      });
    }
    if (e.target.getAttribute('name') === 'lastname') {
      setBody((body) => {
        const newBody = { ...body };
        newBody.last_name = e.target.value;
        return newBody;
      });
    }
    if (e.target.getAttribute('name') === 'confirm') {
      setBody((body) => {
        const newBody = { ...body };
        newBody.confirm_password = e.target.value;
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
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            name="firstname"
            placeholder="Enter your First Name"
            onChange={onChangeHandler}
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            name="lastname"
            placeholder="Enter your Last Name"
            onChange={onChangeHandler}
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="example@email.com"
            onChange={onChangeHandler}
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={onChangeHandler}
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            name="confirm"
            placeholder="Enter your password again"
            onChange={onChangeHandler}
          />
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
