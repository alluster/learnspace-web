import React, { Component } from 'react'
import '../styles/custom.css'
import '../styles/css/bootstrap.css'
import { Button, Col, Row } from 'react-bootstrap'
import Particles from 'react-particles-js';
import particlesjs from './particlesjs-config.json'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ScrollableAnchor from 'react-scrollable-anchor'

import weatherThumb from '../images/weather-thumb.png'
import geological from '../images/geological.jpeg'
import pollution from '../images/pollution.jpeg'


class Advert extends Component {

  componentDidMount() {


  }
  render() {
    return (



      <div className="advert background-dark ">
        <div className="">
          <div className="">
            <Row>
              <Col className="visible-lg visible-md" md={6}>
              <img className="advert-image" src={pollution} alt="Card image cap" />
              </Col>
              <Col md={6} className="padding-20">
              <h2 className="text-white">
              Urban pollution is one of the biggest tragedies and unsolved issues in modern history
                </h2>
                <p className="text-white">
                  Finish Metorology Institution and ESA have created an collaborative course for urban planning to visualize and simplify pollution related data collected
                  by satellites. Take a look at this new course and apply.
                      </p>
            <button className="btn btn-primary btn-lg ">Join now</button>
              </Col>
            </Row>
          
          

          </div>
        </div>
      </div>
    );
  }
}

export default Advert;
