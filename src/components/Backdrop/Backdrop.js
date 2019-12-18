import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = props => (
    <div className={classes.backdrop} onClick={props.click} />
);

export default backdrop;