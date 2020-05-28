import React from 'react'
import styles from './pages.module.css'
import Links from '../components/Links/Links'

const Contact = () => (
  <div className={[styles.page, styles.static].join(' ')}>
    <Links />
  </div>
)

export default Contact
