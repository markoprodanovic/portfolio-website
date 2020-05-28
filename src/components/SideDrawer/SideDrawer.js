import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SideDrawer.module.css'

const SideDrawer = ({ isShown, closeDrawer }) => {
  let drawerStyles = [styles.side_drawer]

  if (isShown) {
    drawerStyles = [styles.side_drawer, styles.open]
  }

  return (
    <nav className={drawerStyles.join(' ')}>
      <ul>
        <li onClick={closeDrawer}>
          <span className={styles.underline}>
            <Link to="/">Home</Link>
          </span>
        </li>
        <li onClick={closeDrawer}>
          <span className={styles.underline}>
            <Link to="/about">About</Link>
          </span>
        </li>
        <li onClick={closeDrawer}>
          <span className={styles.underline}>
            <Link to="/contact">Contact</Link>
          </span>
        </li>
        <li onClick={closeDrawer}>
          <Link className={styles.resume} to="/resume">
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default SideDrawer
