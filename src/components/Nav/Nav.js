import React from 'react'
import { Link } from 'react-router-dom'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import classes from './Nav.module.css'

const nav = (props) => (
  <header
    className={
      props.shadow
        ? [classes.toolbar, classes.shadow].join(' ')
        : classes.toolbar
    }
  >
    <nav className={classes.navbar}>
      <div className={classes.burger}>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className={classes.logo}>
        <Link to="/">marko prodanovic</Link>
      </div>
      <div className={classes.spacer} />
      <div className={classes.nav_items}>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default nav
