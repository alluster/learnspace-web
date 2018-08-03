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


class Terms extends Component {
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
                          <div className="container ">

                              <div className="margin-top-100">
                            <h1>Terms of service</h1>
                            <h3>Terms</h3>
                            <p>Learnspace is a non profit project and does not take any responsibility of the content displayed on this website. All content is open source and licenced under creative commons.
                            <h3>Used services</h3>
                            <p>This website uses many open source libraries and services. You can checkout what from our Github project</p>

                            </p>
                            </div>
                            </div>
                  </div>
            );
      }
}

export default Terms;
