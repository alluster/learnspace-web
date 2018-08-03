import React, { Component } from 'react'
import '../styles/custom.css'
import '../styles/css/bootstrap.css'
import { Button } from 'react-bootstrap'
import Particles from 'react-particles-js';
import particlesjs from '../components/particlesjs-config.json'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import weatherThumb from '../images/weather-thumb.png'

import CardRow from '../components/CardRow'
import LogoRow from '../components/LogoRow'

class OrgView extends Component {

      componentDidMount() {


      }
      render() {
            return (
                  <div className="container">
                  <div className="container margin-top-150">
                        <div className="">


                              <h1>Organization Portal</h1>
                              <h2>Welcome to the Learnspace Organisation portal</h2>
                              <h4>In this portal your organisation can create new learning paths for research and development purposes.</h4>
                        </div>
                        <div className="hr" />

                        <ul class="list-group">
                              <li class="list-group-item">Current user: John Doe</li>
                              <li class="list-group-item">Organization: ESA</li>
                              <li class="list-group-item">Access: Admin</li>

                        </ul>
                        <div className="hr" />

                        <h5>This portal is a collaborative hub for:</h5>
                        <LogoRow />
                        <div className="hr" />
                        <div className="margin-top-50 margin-bottom-50">
                        <h3>Creating a new course:</h3>
                        <h4>                        You can create new cources for your organization by adding information to the information sheets that open up when you click the button create a new course.</h4>
                        <button className="btn btn-primary btn-lg">Create a new course</button>
                        </div>
                        <h3>Your organizations current course catalog:</h3>
                        <ul class="list-group">
                              <li class="list-group-item d-flex justify-content-between list-group-item-action align-items-center">
                                   <h3>Development of Smart cities 08.08.2018<button className="btn btn-primary pull-right btn-md">Edit course content</button> </h3> 
                              </li>
                              <li class="list-group-item d-flex justify-content-between  list-group-item-action align-items-center">
                                   <h3>Arctic development and satellite data use in research<button className="btn btn-primary pull-right btn-md">Edit course content</button></h3>
                              </li>
                              <li class="list-group-item d-flex justify-content-between list-group-item-action align-items-center">
                                    <h3>Copernicus RUS and R – How to visualize data?<button className="btn btn-primary pull-right btn-md">Edit course content</button></h3>
                              </li>
                        </ul>
                        
                  </div>
                  </div>
            );
      }
}

export default OrgView;
