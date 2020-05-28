import React from 'react'
import styles from './Projects.module.css'
import ProjectCard from './ProjectCard/ProjectCard'

const projects = () => (
  <div className={styles.container}>
    <h2>
      <span className={styles.underline}>my work</span>
    </h2>
    <div className={styles.projects}>
      <ProjectCard />
      <ProjectCard />
    </div>
  </div>
)

export default projects
