import React, { Component } from 'react'
import '../styles/custom.css'
import '../styles/css/bootstrap.css'
import { Button } from 'react-bootstrap'
import Particles from 'react-particles-js';
import particlesjs from '../components/particlesjs-config.json'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import weatherThumb from '../images/weather-thumb.png'
import Globe from 'worldwind-react-globe'

import CardRow from '../components/CardRow'
import LogoRow from '../components/LogoRow'
import ListOfThings from '../components/ListOfThings'
import Slider from '../components/Slider'


class StudyTrack extends Component {


      render() {
            const layers = [
                  'coordinates',
                  'view-controls',
                ];

            return (

                  <div >

                        <div className="container margin-top-50">

                                    <div className="margin-30">
                                          <p className="text-muted">Study Track:</p>
                                          <h2>Urban Planning with World Wind</h2>
                                          <h4>This study track provides an deep introduction to current Smart city development research. We will be using the World Wind Globe view as a tool to view global phenmena.</h4>
                                          <p>Combining information from multiple API's provided by ESA and NASA we will go trounght the basics of data science and start using data in our actual real life research. It is 
                                                important to understand the needs for different tools when studying data science. This is why we have already created a tool box for you to download and utilize. 
                                          </p>
                                          <button className="btn btn-primary btn-large">Download toolbox</button>

                                    </div>
                                    <Globe 
                                    ref={this.globeRef}
                                    layers={layers}
                                           />
                                    <ListOfThings />
                        </div>
                  </div>
            );
      }
}

export default StudyTrack;
