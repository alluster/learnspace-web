import React, { Component } from 'react'
import '../styles/custom.css'
import '../styles/css/bootstrap.css'
import { Button } from 'react-bootstrap'
import Particles from 'react-particles-js';
import particlesjs from '../components/particlesjs-config.json'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import weatherThumb from '../images/weather-thumb.png'

import CardRow from '../components/CardRow'
import LogoRow from '../components/LogoRow'
import ListOfThings from '../components/ListOfThings'
import Slider from '../components/Slider'


class StudyTrack extends Component {


      render() {
            return (

                  <div >
                        <Slider />

                        <div className="container margin-top-50">
                                    <div className="margin-30">
                                          <p className="text-muted">Study Track:</p>
                                          <h2>Development of smart Cities</h2>
                                          <h4>This study track  gives and deep introduction to current Smart city development research.</h4>
                                          <p>Combining information from multiple API's provided by ESA and Copernicu RUS we will go trounght the basics of data science and start using data in our actual real life research. It is 
                                                important to understand the needs for different tools when studying data science. This is why we have already created a tool box for you to download and utilize. 
                                          </p>
                                          <button className="btn btn-primary btn-large">Download toolbox</button>

                                    </div>
                                    <ListOfThings />
                        </div>
                  </div>
            );
      }
}

export default StudyTrack;
