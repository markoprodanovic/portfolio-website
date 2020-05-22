import React from 'react'
import styles from './pages.module.css'
import Links from '../components/Links/Links'

const contact = () => (
  <div className={[styles.page, styles.static].join(' ')}>
    <Links />
  </div>
)

export default contact
