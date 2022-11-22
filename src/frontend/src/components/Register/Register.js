import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Login from './Login_Form/Login';
import styles from './Register.module.css';
import Signup from './Signup_Form/Signup';

function Register() {
  const [option, setOption] = useState(useParams().option);

  const changeOptionHandler = () => {
    if (option === 'login') {
      setOption('signup');
    } else {
      setOption('login');
    }
  };

  const style = {
    background: '#fff',
    maxWidth: '70%',
    margin: `${option === 'login' ? '30% auto' : '3rem auto'}`,
    borderRadius: '10px',
    padding: '2rem 1rem',
  };

  return (
    <div className={styles.Register}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <div style={style}>
          {option === 'login' ? (
            <Login changeOption={changeOptionHandler} />
          ) : (
            <Signup changeOption={changeOptionHandler} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;
