import React, { Component } from 'react'
import '../styles/custom.css'
import '../styles/css/bootstrap.css'
import { Button } from 'react-bootstrap'
import Particles from 'react-particles-js';
import particlesjs from './particlesjs-config.json'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import weatherThumb from '../images/weather-thumb.png'
import geological from '../images/geological.jpeg'
import smartcity from '../images/smartcity.jpg'


class Footer extends Component {

      componentDidMount() {


      }
      render() {
            return (
                  <div className="margin-top-50 text-center background-dark footer">
                        <div className="text-center container">             
                          <p className="bottom-25">Learnspace © 2018 All rights reserved</p>
                        
                        </div>
                  </div>
            );
      }
}

export default Footer;
