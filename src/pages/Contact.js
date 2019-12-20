import React from 'react';
import Links from '../components/Links/Links';
import classes from './pages.module.css';

const contact = props => (
    <div className={[classes.page, classes.static].join(' ')}>
        <Links />
    </div>
);

export default contact;