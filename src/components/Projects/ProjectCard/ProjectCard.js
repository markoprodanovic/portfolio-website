import React from 'react';
import Icon from '@material-ui/core/Icon';
import classes from './ProjectCard.module.css'
import Button from '@material-ui/core/Button';

const projectCard = props => {
    const portfolio = 'https://github.com/markoprodanovic/portfolio-website';

    return (
        <div>
            <h3>project title</h3>
            <div className={classes.projectCard}>
                {/* to link to image: process.env.PUBLIC_URL + '/proj-img.png' */}
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/7ae9b488699483.5dde36a6a2043.jpg" />
                <div className={classes.overlay}>
                    <Button variant="extended">
                        <a href="/">See Live</a>
                    </Button>
                    <Button variant="extended">
                        <a href={portfolio} target="_blank">See Github</a>
                    </Button>
                </div>
            </div>
            <div className={classes.links}>
                <a href="#" target="_blank"><Icon className="fas fa-bolt"></Icon></a>
                <a href="#" target="_blank"><Icon className="fab fa-github"></Icon></a>
            </div>
        </div>
    );
}

export default projectCard;