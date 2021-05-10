import React, { useState, useEffect } from "react";
import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard/ProjectCard";

import data from "./projects.json";
const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(
            data.map((project) => {
                return (
                    <ProjectCard
                        projectTitle={project.title}
                        projectDescription={project.description}
                        projectImgAddress={project.imgAddress}
                        gitHubLink={project.githubLInk}
                        demoLink={project.demoLink}
                        stack={project.stack}
                    />
                );
            })
        );
    }, []);

    return (
        <div>
            <div id="mywork" className={styles.anchorMargin} />
            <div className={styles.container}>
                <div className={styles.title}>
                    <h2>MY WORK</h2>
                </div>
                <div className={styles.projects}>{projects}</div>
            </div>
        </div>
    );
};

export default Projects;
