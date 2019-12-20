import React, { Component } from 'react';

import Footer from '../components/Footer/Footer';
import Feature from '../components/Feature/Feature';
import Projects from '../components/Projects/Projects';

class Home extends Component {
    state = {
        currentHat: 'a Software Developer',
        hats: [
            'a filmmaker',
            'a mediocre music producer',
            'Serbian-Canadian',
            'addicted to Nutella',
            'coding at 3am currently'
        ]
    }

    featureClickHandler = (event) => {

        let newHat;
        do {
            newHat = this.state.hats[Math.floor(Math.random() * this.state.hats.length)];
        }
        while (newHat === this.state.currentHat);

        this.setState({
            currentHat: newHat
        });
    }

    render() {
        return (
            <div>
                <Feature hat={this.state.currentHat} click={this.featureClickHandler} />
                <Projects />
                <Footer />
            </div>
        );
    }
};

export default Home;