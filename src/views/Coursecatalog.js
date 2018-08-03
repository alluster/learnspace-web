import React, { Component } from 'react'
import '../styles/custom.css'
import '../styles/css/bootstrap.css'
import { Button } from 'react-bootstrap'
import Particles from 'react-particles-js';
import particlesjs from '../components/particlesjs-config.json'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import weatherThumb from '../images/weather-thumb.png'
import finnishdatahubsystem from '../images/finnishdatahubsystem.png'
import arctic from '../images/arctic.jpeg'
import extra from '../images/extra.jpeg'


import CardRow from '../components/CardRow'
import LogoRow from '../components/LogoRow'
import Advert from '../components/Advert'


//Login 

import { withRouter } from "react-router";
import app from "../firebase";


class CourseCatalog extends Component {
    


      render() {
            return (
                  <div className="container ">
                  
                  <div className="height-100 margin-bottom-100 ">
                        <div>
                        <div className="margin-top-100"> 
                        <CardRow />
                        </div>
                        </div>
                  </div>
                  </div>
            );
      }
}

export default CourseCatalog;
