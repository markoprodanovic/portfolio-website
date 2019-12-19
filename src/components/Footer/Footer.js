import React from 'react';
import classes from './Footer.module.css';

const footer = props => (
    <div className={classes.footer}>
        {/* <div className={classes.madeWith}>
            <strong>Made With</strong> <i className="fab fa-react"></i>
        </div> */}
        <div className={classes.icons}>
            <a href="#"><i className="fab fa-github"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
    </div>
);

export default footer;