import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import config from '../../../config';

import styles from './Signup.module.css';

function Signup(props) {
  const [body, setBody] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  const [regStat, setRegStat] = useState('');
  const [errorValue, setErrorValue] = useState('');
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    if (e.target.getAttribute('type') === 'email') {
      setBody((body) => {
        const newBody = { ...body };
        newBody.email = e.target.value;
        return newBody;
      });
    }
    if (e.target.getAttribute('name') === 'password') {
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

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      console.log(body);
      const res = await axios.post(`${config.url}/api/user/auth/reg`, body);
      const user_id = res.data.id;
      setRegStat('success');
      navigate(`/dashboard/${user_id}`);
    } catch (e) {
      setRegStat('failure');
      setErrorValue(e.response.data.message);
    }
  };

  let errTag = null;
  if (regStat === 'failure') {
    errTag = (
      <div className={styles.error}>
        <p>{errorValue}</p>
      </div>
    );
  } else if (regStat === 'success') {
    errTag = (
      <div className={styles.success}>
        <p>Successful login</p>
      </div>
    );
  } else {
    errTag = null;
  }

  return (
    <div className={styles.form_container}>
      <Link to="/" className={styles.back_button}>
        <box-icon name="arrow-back" color="white"></box-icon>
      </Link>
      <form onSubmit={onSubmitHandler} className={styles.form}>
        {errTag}
        <div className={styles.form_group}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            name="firstname"
            placeholder="Enter your First Name"
            onChange={onChangeHandler}
            value={body.first_name}
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            name="lastname"
            placeholder="Enter your Last Name"
            onChange={onChangeHandler}
            value={body.last_name}
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="example@email.com"
            onChange={onChangeHandler}
            value={body.email}
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={onChangeHandler}
            value={body.password}
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="password"
            name="confirm"
            placeholder="Enter your password again"
            onChange={onChangeHandler}
            value={body.confirm_password}
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
