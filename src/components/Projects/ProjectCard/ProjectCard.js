import React from 'react';
import classes from './ProjectCard.module.css'
import Button from '@material-ui/core/Button';

const projectCard = props => {
    const portfolio = 'https://github.com/markoprodanovic/portfolio-website';

    return (
        <div className={classes.projectCard}>
            <img src={process.env.PUBLIC_URL + '/proj-img.png'} />
            <div className={classes.overlay}>
                <Button variant="extended">
                    <a href="/">See Live</a>
                </Button>
                <Button variant="extended">
                    <a href={portfolio} target="_blank">See Github</a>
                </Button>
            </div>
        </div>
    );
}

export default projectCard;