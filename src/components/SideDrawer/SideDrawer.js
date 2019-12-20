import React from 'react';
import { Link } from "react-router-dom";
import classes from './SideDrawer.module.css';

const sideDrawer = props => {

    let drawerClasses = [classes.side_drawer]
    if (props.show) {
        drawerClasses = [classes.side_drawer, classes.open];
    }

    return (
        <nav className={drawerClasses.join(' ')}>
            <ul>
                <li onClick={props.click}><Link to="/about">About</Link></li>
                <li onClick={props.click}><Link to="/resume">Resume</Link></li>
                <li onClick={props.click}><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default sideDrawer;