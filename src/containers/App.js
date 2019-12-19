import React, { Component } from 'react';

import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import Feature from '../components/Feature/Feature';
import Backdrop from '../components/Backdrop/Backdrop';
import Projects from '../components/Projects/Projects';
import SideDrawer from '../components/SideDrawer/SideDrawer';

import './App.css';

class App extends Component {
  state = {
    sideDrawerOpen: false,
    navShadow: false,
    currentHat: 'a Software Developer',
    hats: [
      'a filmmaker',
      'a mediocre music producer',
      'Serbian-Canadian',
      'addicted to Nutella',
      'coding at 3am currently'
    ]
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

  featureClickHandler = (event) => {

    let newHat;
    do {
      newHat = this.state.hats[Math.floor(Math.random() * this.state.hats.length)];
    }
    while (newHat == this.state.currentHat);

    this.setState({
      currentHat: newHat
    });
  }
  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div className="App" onScroll={this.handleScroll}>
        <Nav drawerClickHandler={this.drawerToggleClickHandler} shadow={this.state.navShadow} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <Feature hat={this.state.currentHat} click={this.featureClickHandler} />
        <Projects />
        <Footer />
      </div >
    );
  }
}

export default App;
