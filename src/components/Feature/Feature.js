import IconButton from '@material-ui/core/IconButton'
import React, { useState, useEffect } from 'react'
import Icon from '@material-ui/core/Icon'
import styles from './Feature.module.css'

const Feature = () => {
  const [currentDescription, setcurrentDescription] = useState(
    'a Software Engineer'
  )

  const [descriptions, setDescriptions] = useState([
    'a hobbiest filmmaker',
    'a dabbling designer',
    'into web development & design',
    'Serbian-Canadian',
    'passionate about building great software',
    'a Media Studies & Computer Science grad',
    'addicted to Nutella',
  ])
  const [recentlyUsedDescriptions, setRecentlyUsedDescriptions] = useState([
    'a Software Engineer',
  ])

  useEffect(() => {
    // if descriptions is empty replace with recentlyUsedDescriptions
    if (descriptions.length <= 0) {
      setDescriptions(recentlyUsedDescriptions)
      setRecentlyUsedDescriptions([])
    }
  }, [descriptions, recentlyUsedDescriptions])

  const featureClickHandler = (event) => {
    let newDescription
    let randomIndex

    do {
      randomIndex = Math.floor(Math.random() * descriptions.length)
      newDescription = descriptions[randomIndex]
    } while (newDescription === currentDescription)

    // remove the new description from descriptions list
    setDescriptions(descriptions.filter((d) => d !== newDescription))

    // add the chosen description to recentlyUsedDescriptions
    setRecentlyUsedDescriptions([...recentlyUsedDescriptions, newDescription])

    // set description
    setcurrentDescription(newDescription)
  }

  return (
    <div className={styles.feature}>
      <div className={styles.aboutMe}>
        <div className={styles.image}>
          <img
            src="marko-character-placeholder.png"
            alt="marko-game-character"
          />
        </div>
        <div className={styles.featureText}>
          <p>Hi, I'm Marko.</p>
          <p>
            I'm <span className={styles.description}>{currentDescription}</span>
            .
          </p>
        </div>
      </div>
      <div className={styles.button}>
        <IconButton onClick={featureClickHandler}>
          <Icon className="fas fa-random" />
        </IconButton>
      </div>
    </div>
  )
}

export default Feature
