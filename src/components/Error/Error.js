import React from 'react';
import classes from './Error.module.css';

const error = props => (
    <div className={classes.error}>
        <h2>404</h2>
        <p>page not found</p>
    </div>
);

export default error;