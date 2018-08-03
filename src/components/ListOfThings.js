import React, { Component } from 'react'
import '../styles/custom.css'
import '../styles/css/bootstrap.css'
import { Button } from 'react-bootstrap'
import Particles from 'react-particles-js';
import particlesjs from './particlesjs-config.json'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import weatherThumb from '../images/weather-thumb.png'
import geological from '../images/geological.jpeg'
import smartcity from '../images/smartcity.jpg'


class ListOfThings extends Component {

      componentDidMount() {


      }
      render() {
            return (
                  <div className="container ">
                        <div class="list-group">
                              <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
                                    <div class="d-flex w-100 justify-content-between">
                                          <button className="btn btn-primary btn-sm pull-right">Continue track</button>

                                          <h5 class="mb-1">Using Data driven software R and Python</h5>
                                          <small>3 days ago</small>

                                    </div>
                                    <p class="mb-1">The core of extensible programming is defining functions. Python allows mandatory and optional arguments, keyword arguments, and even arbitrary argument lists. More about defining functions in Python 3</p>
                                    <small>Donec id elit non mi porta.</small>
                              </a>
                              <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                                    <div class="d-flex w-100 justify-content-between">
                                          <h5 class="mb-1">List group item heading</h5>
                                          <small class="text-muted">3 days ago</small>
                                    </div>
                                    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                    <small class="text-muted">Donec id elit non mi porta.</small>
                              </a>
                              <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                                    <div class="d-flex w-100 justify-content-between">
                                          <h5 class="mb-1">List group item heading</h5>
                                          <small class="text-muted">3 days ago</small>
                                    </div>
                                    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                    <small class="text-muted">Donec id elit non mi porta.</small>
                              </a>
                        </div>




                  </div>
            );
      }
}

export default ListOfThings;
