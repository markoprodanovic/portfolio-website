import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import styles from './Nav.module.css'

const Nav = ({ toggleDrawer, shadow }) => (
  <header
    className={
      shadow ? [styles.toolbar, styles.shadow].join(' ') : styles.toolbar
    }
  >
    <nav className={styles.navbar}>
      <div className={styles.burger}>
        <DrawerToggleButton click={toggleDrawer} />
      </div>
      <div className={styles.logo}>
        <span className={styles.underline}>
          <Link to="/">marko prodanovic</Link>
        </span>
      </div>
      <div className={styles.spacer} />
      <div className={styles.nav_items}>
        <ul>
          <li>
            <HashLink to="/#about">About</HashLink>
          </li>
          <li>
            <HashLink to="/#mywork">My Work</HashLink>
          </li>
          <li>
            <HashLink to="/#contact">Contact</HashLink>
          </li>
          <li>
            <a className={styles.resume} href="resume.pdf">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Nav
