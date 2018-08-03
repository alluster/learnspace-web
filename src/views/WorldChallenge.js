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

import wc from '../images/wc.png'

import CardRow from '../components/CardRow'
import LogoRow from '../components/LogoRow'
import Advert from '../components/Advert'


//Login 

import { withRouter } from "react-router";
import app from "../firebase";


class WorldChallenge extends Component {
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
                  <div className="  container ">
                              <div className="height-80 margin-top-100">
                                          
                                          <Row >
                                          <Col  md={6}>
                                          <img className="signup-image visible-md visible-lg"  src={wc} alt="Card image cap" />
                                          
                                          </Col>
                                          <Col className="margin-top-100" md={6}>
                                          <div className=" vertical-align-center ">
                                                <h1>Open Source Code</h1>
                                                <h2 className="margin-top-25">Open source code is served from my personal Github page </h2>
                                                <a href='https://github.com/alluster/learnspace-app'><Button className="margin-top-25 btn-primary btn btn-lg text-uppercase">View Github code</Button></a>
                                                </div>
                                                <div className="margin-top-50">
                                                <h1>Project video</h1>
                                                <h2 className="margin-top-25">Project video is served using Youtube</h2>
                                                <a href='https://youtu.be/mGw6T9hbILY'><Button className="margin-top-25 btn-primary btn btn-lg text-uppercase">View Youtube Project Video</Button></a>
                                          </div>
                                          </Col>
                                          </Row>
                                         
                                    </div>

                        </div>
                  

            );
      }
}

export default WorldChallenge;
