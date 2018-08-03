import React, { Component } from 'react'
import '../styles/custom.css'
import '../styles/css/bootstrap.css'
import { Button } from 'react-bootstrap'
import Particles from 'react-particles-js';
import particlesjs from './particlesjs-config.json'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import nasa from '../images/logos/nasa.png'
import esa from '../images/logos/esa.png'
import cern from '../images/logos/cern.png'
import ilmatieteenlaitos from '../images/logos/ilmatieteenlaitos.png'

class LogoRow extends Component {

      componentDidMount() {


      }
      render() {
            return (


                  <div className="container margin-top-10">


                        <div className="col-md-3  text-center">
                              <img className="logo-image" src={nasa} alt="Card image cap" />

                        </div>
                        <div className="col-md-3  text-center">
                              <img className="logo-image" src={esa} alt="Card image cap" />

                        </div>
                        <div className="col-md-3  text-center">
                              <img className="logo-image " src={cern} alt="Card image cap" />

                        </div>
                        <div className="col-md-3  text-center">
                              <img className="logo-image" src={ilmatieteenlaitos} alt="Card image cap" />

                        </div>



                  </div>
            );
      }
}

export default LogoRow;
