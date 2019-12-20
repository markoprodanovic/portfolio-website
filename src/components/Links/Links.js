import React from 'react';
import classes from './Links.module.css';
import Icon from '@material-ui/core/Icon';

const links = props => {
    const linkedin = 'https://ca.linkedin.com/in/mprodanovic';
    const github = 'https://github.com/markoprodanovic';
    const email = 'mailto:marko.prodanovic@outlook.com?'
    return (
        <div className={classes.links}>
            <a href={email}>
                <Icon className="fas fa-envelope"></Icon>
                | marko.prodanovic@outlook.com
            </a>
            <a href={github} target="_blank">
                <Icon className="fab fa-github"></Icon>
                | markoprodanovic
            </a>
            <a href={linkedin} target="_blank">
                <Icon className="fab fa-linkedin-in"></Icon>
                | mprodanovic
            </a>
        </div>
    );
}

export default links;