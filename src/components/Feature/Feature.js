import React from 'react';
import Fab from '@material-ui/core/Fab';
import classes from './Feature.module.css';

const feature = props => (
    <div className={classes.feature}>
        <div className={classes.feature__content}>
            <p>Hi, I'm Marko.</p>
            <p>I'm <strong>{props.hat}</strong>.</p>
        </div>
        <div>
            <Fab color="primary" variant="extended" onClick={props.click}>
                Change Hat
            </Fab>
        </div>
    </div>
);

export default feature;