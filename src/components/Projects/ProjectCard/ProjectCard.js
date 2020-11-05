import React from 'react'
import Icon from '@material-ui/core/Icon'
import styles from './ProjectCard.module.css'

const ProjectCard = ({
  projectTitle,
  projectDescription,
  projectImgAddress,
  gitHubLink,
  demoLink,
  stack
}) => {
  let gitHubIcon = null
  if (gitHubLink !== '') {
    gitHubIcon = (
      <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
        <Icon className="fab fa-github" /><span>GITHUB</span>
      </a>
    )
  }

  let demoIcon = null
  if (demoLink !== '') {
    demoIcon = (
      <a href={demoLink} target="_blank" rel="noopener noreferrer">
        <Icon className="fas fa-external-link-alt" /><span>LIVE</span>
      </a>
    )
  }

  const tools = stack.map((item) => <span>{item}</span>)

  return (
    <div className={styles.projectCard}>
      <div className={styles.imageContainer}>
        <img src={projectImgAddress} alt={projectTitle} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.projectTitle}>
          <span>{projectTitle}</span>
        </h3>
        <div className={styles.tools}>
          {tools}
        </div>
        <div className={styles.description}>
          <p>{projectDescription}</p>
        </div>
        <div className={styles.links}>
          {gitHubIcon}
          {demoIcon}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
