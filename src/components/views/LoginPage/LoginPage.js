import React from 'react';
import styles from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <section className={styles.loginPage}>
      <form className={styles.loginPage__form}>
        <label htmlFor='email'>Email</label>
        <input type='email' />

        <label htmlFor='email'>Password</label>
        <input type='password' />

        <p>
          Forgot password? <a href='#'>Change here</a>
        </p>
        <button type='submit'>Log In</button>
      </form>
    </section>
  );
};

export default LoginPage;