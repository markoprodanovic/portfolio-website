import React from 'react'
import styles from './About.module.css'

function About() {
  return (
    <div>
      <div id="about" className={styles.anchorMargin}/>
      <div className={styles.container}>
        <div className={styles.aboutMe}>
          <h2>
            <span className={styles.underline}>about me</span>
          </h2>
          <div className={styles.content}>
            <div className={styles.image}>
              <img src="marko-character.png" alt="marko-game-character" />
            </div>
            <div className={styles.text}>
              <p>I'm a software developer and creative technologist with a passion for software engineering and design. I studied Media Studies and Computer Science at UBC.</p>
              <p>Since graduating in 2019, I’ve been working at UBC as a Data Analyst and Media
              Specialist.</p>
              <p><strong>Here are some technologies I’ve been working with recently:</strong></p>
              <ul className={styles.skillsList}>
                <li><span>JavaScript</span></li>
                <li><span>Python</span></li>
                <li><span>React</span></li>
                <li><span>Pandas</span></li>
                <li><span>Node.js</span></li>
                <li><span>ffmpeg</span></li>
              </ul>
            </div>
          </div>
        </div >
    </div>
    </div>
  )
}

export default About