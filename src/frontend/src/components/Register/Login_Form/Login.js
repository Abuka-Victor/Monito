import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import axios from 'axios';
import config from '../../../config';

function Login(props) {
  const [body, setBody] = useState({
    email: '',
    password: '',
  });
  const [loginStat, setloginStat] = useState('');
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
    if (e.target.getAttribute('type') === 'password') {
      setBody((body) => {
        const newBody = { ...body };
        newBody.password = e.target.value;
        return newBody;
      });
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${config.url}/api/user/auth/login`, body);
      const user_id = res.data.id;
      setloginStat('success');
      navigate(`/dashboard/${user_id}`);
    } catch (e) {
      setloginStat('failure');
      setErrorValue(e.response.data.message);
    }
  };

  let errTag = null;
  if (loginStat === 'failure') {
    errTag = (
      <div className={styles.error}>
        <p>{errorValue}</p>
      </div>
    );
  } else if (loginStat === 'success') {
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
