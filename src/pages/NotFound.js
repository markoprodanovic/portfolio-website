import React from 'react';
import Error from '../components/Error/Error'
import classes from './pages.module.css';

const notFound = props => (
    <div className={classes.page}>
        <Error />
    </div >
);

export default notFound;