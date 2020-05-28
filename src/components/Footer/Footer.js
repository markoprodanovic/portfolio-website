import React from 'react'
import classes from './Footer.module.css'

const footer = () => {
  return (
    <div className={classes.footer}>
      <a
        href="https://github.com/markoprodanovic/portfolio-website"
        target="_blank"
        rel="noopener noreferrer"
      >
        ~ Designed & Built by Marko ~
      </a>
    </div>
  )
}

export default footer
