import React from 'react'
import { HashLink } from 'react-router-hash-link'
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
            <HashLink to="/#about">About</HashLink>
          </span>
        </li>
        <li onClick={closeDrawer}>
          <span className={styles.underline}>
            <HashLink to="/#mywork">My Work</HashLink>
          </span>
        </li>
        <li onClick={closeDrawer}>
          <span className={styles.underline}>
            <HashLink to="/#contact">Contact</HashLink>
          </span>
        </li>
        <li onClick={closeDrawer}>
          <a className={styles.resume} href="resume.pdf">
              Resume
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default SideDrawer
