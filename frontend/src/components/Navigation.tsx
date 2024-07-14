import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><NavLink to="/" className={({isActive}) => isActive ? styles.active : ''}>Home</NavLink></li>
        <li><NavLink to="/designer" className={({isActive}) => isActive ? styles.active : ''}>Garden Designer</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navigation;
