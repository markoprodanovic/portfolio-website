import React from 'react';
import classes from './pages.module.css';
import Footer from '../components/Footer/Footer';

const about = props => (
    <div className={classes.page}>
        <h2> About Page</h2>
        <Footer />
    </div>
);

export default about;