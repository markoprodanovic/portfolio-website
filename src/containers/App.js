import React, { Component } from 'react';

import Nav from '../components/Nav/Nav';
import SideDrawer from '../components/SideDrawer/SideDrawer';
import Backdrop from '../components/Backdrop/Backdrop';

import './App.css';

class App extends Component {
  state = {
    sideDrawerOpen: false,
    navShadow: false
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
      <div className="App" onScroll={this.handleScroll}>
        <Nav drawerClickHandler={this.drawerToggleClickHandler} shadow={this.state.navShadow} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{ marginTop: '64px' }}>
          <p>This is the page content</p>
        </main>
      </div >
    );
  }
}

export default App;
