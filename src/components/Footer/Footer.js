import React from 'react';
import classes from './Footer.module.css';
import Icon from '@material-ui/core/Icon';

const footer = props => {
    const linkedin = 'https://ca.linkedin.com/in/mprodanovic';
    const github = 'https://github.com/markoprodanovic';
    return (
        <div className={classes.footer}>
            <div className={classes.icons}>
                <a href={github} target="_blank"><Icon className="fab fa-github"></Icon></a>
                <a href={linkedin} target="_blank"><Icon className="fab fa-linkedin-in"></Icon></a>
            </div>
        </div>
    );
}

export default footer;