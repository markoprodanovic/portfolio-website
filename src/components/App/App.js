// react and react-router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

// components
import Nav from '../Nav/Nav'
import Backdrop from '../Backdrop/Backdrop'
import SideDrawer from '../SideDrawer/SideDrawer'

// pages
import Home from '../../pages/Home'
import About from '../../pages/About'
import Resume from '../../pages/Resume'
import Contact from '../../pages/Contact'
import NotFound from '../../pages/NotFound'

// styles
import './App.css'

const App = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
  const [navShadow, setNavShadow] = useState(false)

  // runs when component is mounted
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  // runs before component is unmounted
  useEffect(() => {
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleDrawerClickHandler = () => {
    let flipped = !sideDrawerOpen
    setSideDrawerOpen(flipped)
  }

  const closeDrawerClickHandler = () => {
    setSideDrawerOpen(false)
  }

  const handleScroll = (e) => {
    let scroll = window.scrollY
    scroll > 3 ? setNavShadow(true) : setNavShadow(false)
  }

  let backdrop

  if (sideDrawerOpen) {
    backdrop = <Backdrop closeDrawer={closeDrawerClickHandler} />
  }

  return (
    <Router>
      <div className="App" onScroll={handleScroll}>
        <Nav toggleDrawer={toggleDrawerClickHandler} shadow={navShadow} />
        <SideDrawer
          isShown={sideDrawerOpen}
          closeDrawer={closeDrawerClickHandler}
        />
        {backdrop}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
