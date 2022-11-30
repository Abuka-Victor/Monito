import React from 'react';
import styles from './Settings.module.css';

function Settings({ viewControl }) {
  return (
    <div className={styles.Settings}>
      <h1>Settings</h1>
      <div className={styles.settings__container}>
        <div className={styles.banner}></div>
        <form action="">
          <div className={styles.profile__container}>
            <div className={styles.profile}>
              <img
                src="https://avatars.githubusercontent.com/u/84464869?v=4"
                alt="profile pic"
              />
              <div className={styles.profile_right}>
                <div>
                  <h2>Profile</h2>
                  <p>Update your photo and personal details</p>
                </div>
                <div className={styles.profile_buttons}>
                  <button
                    onClick={() => viewControl('home')}
                    className={styles.cancel_btn}
                  >
                    Cancel
                  </button>
                  <button className={styles.save_btn}>Save</button>
                </div>
              </div>
            </div>
            <div className={styles.form_class}>
              <div className={styles.form_group}>
                <label htmlFor="fname">First Name</label>
                <input type="text" name="fname" />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="lname">Last Name</label>
                <input type="text" name="lname" />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="password">Former Password</label>
                <input type="password" name="password" />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="cpassword">New Password</label>
                <input type="password" name="cpassword" />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="profile">Update Profile Picture</label>
                <input type="file" name="profile" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Settings;
