import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/Nav.module.css"; // Подключаем CSS файл для стилей

function Nav() {
  return (
    <nav className={styles.starWarsNav}>
      <ul>
        <li><Link to="/">Movies</Link></li>
        <li><Link to="/add-movie">Add</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
