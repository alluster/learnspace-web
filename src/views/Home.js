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
import datascience from '../images/datascience.png'


import CardRow from '../components/CardRow'
import LogoRow from '../components/LogoRow'
import Advert from '../components/Advert'


//Login

import { withRouter } from "react-router";
import app from "../firebase";


class Home extends Component {
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
                  <div className="height-80 container ">
                        <div className=" " >
                              <div className="height-80 ">
                                    <div >
                                          <div className=" vertical-align-center  absolute-hero">
                                                <h1>Welcome to Learnspace</h1>
                                                <h2 className="margin-top-25">We have collected some interesting learning tracks for you made in collaboration with top satellite data providers in the world.</h2>
                                                <p className="margin-top-25"> Wide range of ready formatted data to use in research or development.  </p>
                                                <a href='#section1'><Button className="margin-top-25 btn-primary btn btn-lg text-uppercase">create your curiculum</Button></a>
                                          </div>
                                    </div>

                              </div>
                        </div>


                        <CardRow />
                        <Advert />
                  </div>
            );
      }
}

export default Home;
