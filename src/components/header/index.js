import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import styles from './style.module.css';

/**
 * this component takes care of showing the header navigation
 */
const Header = () => (
  <header className={styles.wrapper}>
    <img src={logo} alt="logo" className={styles.logo} />
    <Link to="/" className={styles.link}>
      Home
    </Link>
  </header>
);

export default Header;
