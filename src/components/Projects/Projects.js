import React from 'react';
import classes from './Projects.module.css'
import ProjectCard from './ProjectCard/ProjectCard'

const projects = props => (
    <div className={classes.projects}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
    </div>
);

export default projects;