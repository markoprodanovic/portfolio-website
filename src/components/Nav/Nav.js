import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import classes from './Nav.module.css';

const nav = props => (
    <header className={props.shadow ? [classes.toolbar, classes.shadow].join(' ') : classes.toolbar}>
        <nav className={classes.navbar}>
            <div>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className={classes.logo}><a href="/">Marko Prodanovic</a></div>
            <div className={classes.spacer} />
            <div className={classes.nav_items}>
                <ul>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Resume</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav >
    </header >
)

export default nav;