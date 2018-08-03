import React, { Component } from 'react'
import '../../styles/custom.css'
import '../../styles/css/bootstrap.css'
import { Button, Col, Row } from 'react-bootstrap'
import Particles from 'react-particles-js';
import particlesjs from '../../components/particlesjs-config.json'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import weatherThumb from '../../images/weather-thumb.png'
import finnishdatahubsystem from '../../images/finnishdatahubsystem.png'
import arctic from '../../images/arctic.jpeg'
import datascience from '../../images/datascience.png'
import person from '../../images/person.jpeg'


import CardRow from '../../components/CardRow'
import LogoRow from '../../components/LogoRow'
import Advert from '../../components/Advert'


//Login 

import { withRouter } from "react-router";

const SignUpView = ({ onSubmit }) => {
  return (

    <div className="height-100 ">
      <div className="height-80 ">
        <div className="container" >
          <Row >
          <Col className="margin-top-100" md={6}>
          <div className="marketing-box-2">
          </div>
          <div className="marketing-box">
            <h1>Join now and change the world!</h1>
          </div>
            <img className="signup-image" src={person} alt="Card image cap" />
            </Col>
            <Col className="margin-top-100" md={6}>
              <div>
                <h1>Get started now</h1>
                <form  autocomplete="off" className="margin-top-50" onSubmit={onSubmit}>
                <div>
                     <h4>
                    Username
                    </h4>
                    <div className="input-container">
                  <input className="input-signup"
                      name="username"
                      type="username"
                    />
                    </div>
                  </div>
                  <div>
                  <h4>
                 Email address
                 </h4>
                 <div className="input-container">
               <input className="input-signup"
                   name="email"
                   type="email"
                 />
                 </div>
               </div>
               <div>
               <h4>
              Password
              </h4>
              <div className="input-container">
            <input className="input-signup"
                name="password"
                type="password"
              />
              </div>
            </div>
                  <Button type="submit" className="margin-top-25 btn-primary btn btn-lg text-uppercase">Register my account</Button>
                </form>
              </div>
              <div className="margin-top-50">
                <p>
                This page is created as a nonprofit project, and uses to Google’s Services. By signing up you agree to Learnspace.org<Link to="/terms"  className="terms">Terms of Service.</Link>
                </p>
              </div>
            </Col>
            
          </Row>
        </div>
        <div className="container margin-top-50">
        <Row>
          <Col md={12}>
          <h1>
            Course selection
          </h1>
          <h3>
            View our selection of cources for you to take and boost up your research career.
          </h3>
          </Col>
        </Row>
        </div>
      <CardRow />
      </div>


    </div>
  );
}







export default SignUpView;