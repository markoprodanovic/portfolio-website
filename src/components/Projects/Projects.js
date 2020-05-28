import React from 'react'
import styles from './Projects.module.css'
import ProjectCard from './ProjectCard/ProjectCard'
const Projects = () => (
  <div className={styles.container}>
    <h2>
      <span className={styles.underline}>my work</span>
    </h2>
    <div className={styles.projects}>
      {/* to link to image: process.env.PUBLIC_URL + '/proj-img.png' */}
      <ProjectCard
        projectTitle="Yuki Postal Service (YPS)"
        projectDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        projectImgAddress="https://mir-s3-cdn-cf.behance.net/project_modules/fs/7ae9b488699483.5dde36a6a2043.jpg"
        gitHubLink="https://github.com/markoprodanovic/yuki-postal-service"
        demoLink=""
      />
      <ProjectCard
        projectTitle="UBC Learning Analytics Hackathon"
        projectDescription="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        projectImgAddress="https://brand3.sites.olt.ubc.ca/files/2018/09/Logos_1_6UnitLogo_768px.jpg"
        gitHubLink=""
        demoLink=""
      />
      <ProjectCard
        projectTitle="Canvas Quiz Reports"
        projectDescription="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        projectImgAddress="https://brand3.sites.olt.ubc.ca/files/2018/09/Logos_1_6UnitLogo_768px.jpg"
        gitHubLink="https://github.com/saud-learning-services/quiz-reports"
        demoLink=""
      />
      <ProjectCard
        projectTitle="Canvas Module Progress Dashboard"
        projectDescription="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        projectImgAddress="https://miro.medium.com/max/3200/0*j6FR_vt6UZIAfsHS"
        gitHubLink=""
        demoLink=""
      />
    </div>
  </div>
)

export default Projects
