import React from 'react'
import MailIcon from '@material-ui/icons/Mail'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

import styles from './Contact.module.css'

function Contact() {

    return (
        <div id="contact" className={styles.container}>
            <div className={styles.title}>
                <h2>CONTACT</h2>
            </div>
            <div className={styles.links}>
                <div className={styles.link}>
                    <a href="mailto:marko.prodanovic@outlook.com">
                        <MailIcon />
                    </a>
                </div>
                <div className={styles.link}>
                    <a href="https://www.linkedin.com/in/mprodanovic/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact