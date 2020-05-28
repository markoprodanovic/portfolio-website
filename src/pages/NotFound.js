import React from 'react'
import styles from './pages.module.css'
import Error from '../components/Error/Error'

const NotFound = () => (
  <div className={[styles.page, styles.static].join(' ')}>
    <Error />
  </div>
)

export default NotFound
