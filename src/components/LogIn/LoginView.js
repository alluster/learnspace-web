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
const LoginView = ({ onSubmit }) => {
  return (
    <div className="container ">
      <div className="margin-top-100 text-center">
      <h1>Login</h1>
      <form  className="margin-top-50" onSubmit={onSubmit}>

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
        <Button type="submit" className="margin-top-25 btn-primary btn btn-lg text-uppercase">Login</Button>
      </form>
    </div>
    </div>
  );
};

export default LoginView;