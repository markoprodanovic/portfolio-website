import React from 'react';
import classes from './SideDrawer.module.css';

const sideDrawer = props => {

    let drawerClasses = [classes.side_drawer]
    if (props.show) {
        drawerClasses = [classes.side_drawer, classes.open];
    }

    return (
        <nav className={drawerClasses.join(' ')}>
            <ul>
                <li><a href="/">About</a></li>
                <li><a href="/">Resume</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
    );
};

export default sideDrawer;