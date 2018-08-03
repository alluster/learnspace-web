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


class FrontPage extends Component {
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
                  <div className="height-100 margin-bottom-100 ">
                        <img className="extra-image visible-lg visible-md" src={extra} />
                        <div className="background-hero margin-bottom-200 " >
                              <div className="height-100 ">
                                    <div className=" text-white ">
                                          <div className=" vertical-align-center  absolute-hero">
                                                <h1 className="hero-text">LEARNSPACE</h1>
                                                <h2 className="margin-top-25">Learn to use data collections</h2>
                                                <p className="margin-top-25"> Wide range of ready formatted data to use in research or development.  </p>
                                                <a href='#section1'><Button className="margin-top-25 btn-primary btn btn-lg text-uppercase">Register now</Button></a>
                                                <div> <Link to="/orgview"><h4 className="margin-top-25" style={{ color: "#FC3D22", textDecoration: "underline" }} href="/orgview">Organizational user click here</h4>  </Link></div>
                                          </div>
                                    </div>
                                    <Particles className="top-0 height-100 background-dark width-100 particles" params={particlesjs} />

                              </div>
                        </div>
                  

                        <LogoRow />
                  
                  </div>
            );
      }
}

export default FrontPage;
