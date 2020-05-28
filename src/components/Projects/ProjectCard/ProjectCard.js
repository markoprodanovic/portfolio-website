import React from 'react'
import Icon from '@material-ui/core/Icon'
import styles from './ProjectCard.module.css'
import Button from '@material-ui/core/Button'

const projectCard = () => {
  const portfolio = 'https://github.com/markoprodanovic/portfolio-website'

  return (
    <div className={styles.container}>
      <div className={styles.projectCard}>
        {/* to link to image: process.env.PUBLIC_URL + '/proj-img.png' */}
        {/* <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/7ae9b488699483.5dde36a6a2043.jpg" /> */}
        <div className={styles.overlay}>
          <Button variant="extended">
            <a href="/">See Live</a>
          </Button>
          <Button variant="extended">
            <a href={portfolio} target="_blank" rel="noopener noreferrer">
              See Github
            </a>
          </Button>
        </div>
      </div>
      <div className={styles.info}>
        <h3 className={styles.projectTitle}>
          <span className={styles.underline}>Yuki Postal Service (YPS)</span>
        </h3>
        <div className={styles.description}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className={styles.links}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Icon className="fab fa-github"></Icon>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Icon className="fas fa-external-link-alt"></Icon>
          </a>
        </div>
      </div>
    </div>
  )
}

export default projectCard
