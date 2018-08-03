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
                  <div class="list-group margin-top-50">
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
                              <div class="d-flex w-100 justify-content-between">

                                    <h3 class="mb-1">Using Data driven software R and Python</h3>
                                    <small>3 days ago</small>

                              </div>

                        </a>
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                              <div class="d-flex w-100 justify-content-between">
                                    <h4 class="mb-1">Creating a dataset for urban planning.</h4>
                                    <small class="text-muted">3 days ago</small>
                              </div>
                              <button className="btn btn-primary btn-sm pull-right">Continue lecture</button>

                              <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                              <small class="text-muted">Donec id elit non mi porta.</small>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                              <div class="d-flex w-100 justify-content-between">
                                    <h4 class="mb-1">Using World Wind to generate prediction models for rapid weather changes.</h4>
                                    <small class="text-muted">3 days ago</small>
                              </div>
                              <button className="btn btn-secondary btn-sm pull-right">Continue lecture</button>

                              <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                              <small class="text-muted">Donec id elit non mi porta.</small>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                              <div class="d-flex w-100 justify-content-between">
                                    <h4 class="mb-1">Documenting findings.</h4>
                                    <small class="text-muted">3 days ago</small>
                              </div>
                              <button className="btn btn-secondary btn-sm pull-right">Continue lecture</button>

                              <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                              <small class="text-muted">Donec id elit non mi porta.</small>
                        </a>
                  </div>




            );
      }
}

export default ListOfThings;
