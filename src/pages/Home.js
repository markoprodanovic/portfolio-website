import React, { useState, useEffect } from 'react'

import Footer from '../components/Footer/Footer'
import Feature from '../components/Feature/Feature'
import Projects from '../components/Projects/Projects'

const Home = () => {
  const [currentDescription, setcurrentDescription] = useState(
    'a Software Engineer'
  )
  const [descriptions, setDescriptions] = useState([
    'a hobbiest filmmaker',
    'a dabbling designer',
    'a mediocre music producer',
    'Serbian-Canadian',
    'a UBC grad (Media Studies & Computer Science)',
    'addicted to Nutella',
    'coding at 3am currently',
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
    <div>
      <Feature hat={currentDescription} click={featureClickHandler} />
      <Projects />
      <Footer />
    </div>
  )
}

export default Home
