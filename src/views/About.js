import React, { Component } from 'react'
import '../styles/custom.css'
import '../styles/css/bootstrap.css'
import { Button, Col, Row } from 'react-bootstrap'
import Particles from 'react-particles-js';
import particlesjs from '../components/particlesjs-config.json'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import weatherThumb from '../images/weather-thumb.png'
import finnishdatahubsystem from '../images/finnishdatahubsystem.png'
import arctic from '../images/arctic.jpeg'
import datascience from '../images/datascience.png'
import about from '../images/about.jpeg'


import CardRow from '../components/CardRow'
import LogoRow from '../components/LogoRow'
import Advert from '../components/Advert'


//Login 

import { withRouter } from "react-router";
import app from "../firebase";


class About extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  greeting: '',
                  user: ''
            }
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this); // <-- add this line
      }

      handleLogout() {
            app.auth().signOut()
                  .then(function () {
                  })
                  .catch(function (error) {
                  });

      }
      handleChange(e) {
            this.setState({
                  [e.target.name]: e.target.value
            });
      }
      handleSubmit(e) {
            e.preventDefault();
            const itemsRef = app.database().ref('greetings');
            const item = {
                  title: this.state.greeting,
            }
            itemsRef.push(item);
            this.setState({
                  greeting: ''
            });
      }


      render() {
            return (
                  <div className="height-100 ">
                              <div className="height-80 ">
                                    <div className="container" >
                                          <Row >
                                          <Col className="margin-top-100" md={6}>
                                          <img className="signup-image visible-md visible-lg"  src={about} alt="Card image cap" />
                                          
                                          </Col>
                                          <Col className="margin-top-100" md={6}>
                                          <div className=" vertical-align-center ">
                                                <h1>Extend your professional capabilities</h1>
                                                <h2 className="margin-top-25">Why should the data collected with satellites and other instruments be available to only those few who can code?</h2>
                                                <p className="margin-top-25">The aim for Learnspace is to reach out the cap between the ones who need data and the ones who can put it into understandable format.</p>
                                                <a href='#section1'><Button className="margin-top-25 btn-primary btn btn-lg text-uppercase">View some of the most asked questions</Button></a>
                                          </div>
                                          </Col>
                                          </Row>
                                         
                                    </div>

                        </div>
                  

                  </div>
            );
      }
}

export default About;
