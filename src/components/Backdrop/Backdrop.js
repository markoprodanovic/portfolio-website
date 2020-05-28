import React from 'react'
import styles from './Backdrop.module.css'

const Backdrop = ({ closeDrawer }) => (
  <div className={styles.backdrop} onClick={closeDrawer} />
)

export default Backdrop
