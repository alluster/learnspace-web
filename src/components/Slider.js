import React, { Component } from 'react'
import '../styles/custom.css'
import '../styles/css/bootstrap.css'
import { Carousel } from 'react-bootstrap'
import Particles from 'react-particles-js';
import particlesjs from './particlesjs-config.json'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import smartcity from '../images/smartcity.jpg'
import smartcity_2 from '../images/smartcity_2.jpg'
import smartcity_3 from '../images/smartcity_3.jpg'



class Slider extends Component {

      componentDidMount() {


      }
      render() {
            return (



                  <div >
                        <Carousel>
                              <Carousel.Item className="slider-image">
                                    <img width="100%" height="100%" alt="900x500" src={smartcity_3} />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                              </Carousel.Item>
                             
                        </Carousel>
                  </div>
            );
      }
}

export default Slider;
