import React from 'react'
import { Link } from 'react-router-dom'
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
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link className={styles.resume} to="/resume">
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Nav
