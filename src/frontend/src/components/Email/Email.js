import React from 'react';
import styles from './Email.module.css';

function SubmitHandler(e) {
  console.log(e);
}

function Email() {
  return (
    <div>
      <div className={styles.Email}>
        <h2>BE THE FIRST TO KNOW</h2>
        <form onSubmit={SubmitHandler}>
          <div className={styles.form_group}>
            <input
              type="email"
              placeholder="EMAIL HERE"
              name="email"
              id="email"
            />
            <button type="submit">SUBSCRIBE</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Email;
