import React from 'react';
import classes from './DrawerToggleButton.module.css';

const drawerToggleButton = props => (
    <button className={classes.toggle_button} onClick={props.click}>
        <i className="fa fa-bars fa-lg"></i>
    </button>
);

export default drawerToggleButton;