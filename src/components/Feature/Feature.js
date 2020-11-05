import React from 'react'
import styles from './Feature.module.css'

function Feature() {
  return (
    <div className={styles.feature}>
      <div className={styles.aboutMe}>
        <div className={styles.featureText}>
          <h1>Hi, I'm Marko.</h1>
          <p className={styles.description}>I'm a <span className={styles.developer}>software developer</span></p>
          <span className={styles.mobileContainer}>
            <p className={styles.subtitle}>I like designing and building cool things for the web and beyond.</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Feature
