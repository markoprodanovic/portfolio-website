// react and react-router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from 'react';

// components
import Nav from '../Nav/Nav';
import Backdrop from '../Backdrop/Backdrop';
import SideDrawer from '../SideDrawer/SideDrawer';

// pages
import Home from '../../pages/Home';
import About from '../../pages/About';
import Resume from '../../pages/Resume';
import Contact from '../../pages/Contact';
import NotFound from '../../pages/NotFound';

// styles
import './App.css';

class App extends Component {
  state = {
    sideDrawerOpen: false,
    navShadow: false,
  };

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  handleScroll = (event) => {
    let scroll = window.scrollY;
    (scroll > 3) ? this.setState({ navShadow: true }) : this.setState({ navShadow: false });
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <Router>
        <div className="App" onScroll={this.handleScroll}>
          <Nav drawerClickHandler={this.drawerToggleClickHandler} shadow={this.state.navShadow} />
          <SideDrawer show={this.state.sideDrawerOpen} click={this.drawerToggleClickHandler} />
          {backdrop}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div >
      </Router >
    );
  }
}

export default App;
