import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import classes from './Feature.module.css';

const feature = props => (
    <div className={classes.feature}>
        <div className={classes.feature__content}>
            <p>Hi, I'm Marko.</p>
            <p>I'm <strong>{props.hat}</strong>.</p>
        </div>
        <div className={classes.feature__button__div}>
            <IconButton className={classes.feature__button} onClick={props.click}>
                <Icon className="fas fa-random" />
            </IconButton>
        </div>
    </div>
);

export default feature;