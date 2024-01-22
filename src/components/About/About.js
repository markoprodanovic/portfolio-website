import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <div>
      <div id="about" className={styles.anchorMargin} />
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
              <p>
                I'm a software developer and creative technologist with a
                passion for software engineering and design. I studied Media
                Studies and Computer Science at UBC.
              </p>
              <p>
                Since June 2022 I've been working with BarrelWise Technologies
                as the Lead Mobile Developer. I've been in charge of all
                development and management of the React Native app as well as
                all the UI/UX design, deployment and distribution.
              </p>
              <p>
                <strong>
                  Here are some technologies I’ve been working with recently:
                </strong>
              </p>
              <ul className={styles.skillsList}>
                <li>
                  <span>TypeScript</span>
                </li>
                <li>
                  <span>JavaScript</span>
                </li>
                <li>
                  <span>Python</span>
                </li>
                <li>
                  <span>Go</span>
                </li>
                <li>
                  <span>React</span>
                </li>
                <li>
                  <span>React Native</span>
                </li>
                <li>
                  <span>Next.js</span>
                </li>
                <li>
                  <span>Node.js</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
