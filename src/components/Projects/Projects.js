import React from 'react';
import classes from './Projects.module.css'
import ProjectCard from './ProjectCard/ProjectCard'

const projects = props => (
    <div className={classes.container}>
        <h2>- my work -</h2>
        <div className={classes.projects}>
            <ProjectCard />
            <ProjectCard />
        </div>
    </div>
);

export default projects;