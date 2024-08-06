// src/components/Navbar.js
"use client"
import React, { useState } from 'react';

import styles from "./Navbar/Navbar.module.css"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <a href="/">Logo</a>
        </div>
        <input
          type="checkbox"
          id="menu-toggle"
          className={styles['menu-toggle']}
          checked={isOpen}
          onChange={toggleMenu}
        />
        <label htmlFor="menu-toggle" className={styles['menu-icon']}>
          &#9776;
        </label>
        <ul className={`${styles['nav-links']} ${isOpen ? styles['nav-open'] : ''}`}>
          <li><a href="#" className={styles.link}>Home</a></li>
          <li><a href="#" className={styles.link}>About</a></li>
          <li><a href="#" className={styles.link}>Services</a></li>
          <li><a href="#" className={styles.link}>Portfolio</a></li>
          <li><a href="#" className={styles.link}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
