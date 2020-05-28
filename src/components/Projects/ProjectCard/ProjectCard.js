import React from 'react'
import Icon from '@material-ui/core/Icon'
import styles from './ProjectCard.module.css'

const ProjectCard = ({
  projectTitle,
  projectDescription,
  projectImgAddress,
  gitHubLink,
  demoLink,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.projectCard}>
        <img src={projectImgAddress} alt={projectTitle} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.projectTitle}>
          <span className={styles.underline}>{projectTitle}</span>
        </h3>
        <div className={styles.description}>
          <p>{projectDescription}</p>
        </div>
        <div className={styles.links}>
          <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
            <Icon className="fab fa-github"></Icon>
          </a>
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <Icon className="fas fa-external-link-alt"></Icon>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
