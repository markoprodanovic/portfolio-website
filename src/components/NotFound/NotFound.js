import React from 'react'
import styles from './NotFound.module.css'

const NotFound = () => (
  <div className={[styles.page, styles.static].join(' ')}>
    <div className={styles.error}>
      <h2>404</h2>
      <p>page not found</p>
    </div>
  </div>
)

export default NotFound
