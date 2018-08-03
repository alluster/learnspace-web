import React, { Component } from 'react'
import '../styles/custom.css'
import '../styles/css/bootstrap.css'
import { Button, Col, Row } from 'react-bootstrap'
import Particles from 'react-particles-js';
import particlesjs from './particlesjs-config.json'
import ScrollableAnchor from 'react-scrollable-anchor'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';


import weatherThumb from '../images/weather-thumb.png'
import geological from '../images/geological.jpeg'
import smartcity from '../images/smartcity.jpg'
import finnishdatahubsystem from '../images/finnishdatahubsystem.png'
import arctic from '../images/arctic.jpeg'
import datascience from '../images/datascience.png'
import airpollution from '../images/air-pollution.jpeg'


class CardRow extends Component {

  componentDidMount() {


  }
  render() {
    return (

      

   <div className="container-gray ">
           <ScrollableAnchor id={'section1'}>

        <div className=" margin-top-25 padding-bottom-50">
            <Row>
            <Col md={4} sm={12} className="margin-top-50">
              <div className="card"  >
                <img className="card-img-top card-image" src={airpollution} alt="Card image cap" />
                <div className="card-body">
                  <h3 className="card-title">Air pollution research </h3>
                  <p className="card-text">Using FMI data sets we will learn how to retrieve and use data conserning air pollution in a global scale.</p>
                  <Link to="/studytrack" ><button class="btn btn-primary">Follow the learning track</button></Link>
                  </div>
              </div>
            </Col>
            <Col md={4} sm={12} className="margin-top-50">
            <div className="card"  >
                <img className="card-img-top card-image" src={weatherThumb} alt="Card image cap" />
                <div className="card-body">
                  <h3 className="card-title">Weather technologies</h3>
                  <p className="card-text">We have combined a learning track fro you to study a certificate in metheorological data science.</p>
                  <Link to="/studytrack"><button class="btn btn-primary">Follow the learning track</button></Link>
                  </div>
              </div>
              </Col>
              <Col md={4} sm={12} className="margin-top-50">
            <div className="card"  >
            <img className="card-img-top card-image" src={geological} alt="Card image cap" />
                <div className="card-body">
                  <h3 className="card-title">Satellite data for researchers</h3>
                  <p className="card-text">Learn to use satellite data for geological research.</p>
                  <Link to="/studytrack"><button class="btn btn-primary">Follow the learning track</button></Link>
                  </div>
              </div>
              </Col>
              </Row>
              <Row>
            <Col md={4} sm={12} className="margin-top-50">
            <div className="card"  >
            <img className="card-img-top card-image" src={smartcity} alt="Card image cap" />
                <div className="card-body">
                  <h3 className="card-title">Development of Smart Cities</h3>
                  <p className="card-text">Combined knowlledge from city planning and satellite technologies available together for smart city planning.</p>
                  <Link to="/studytrack"><button class="btn btn-primary">Follow the learning track</button></Link>
                  </div>
              </div>
              </Col>
              
          <Col md={4} sm={12} className="margin-top-50">
          <div className="card"  >
                <img className="card-img-top card-image" src={arctic} alt="Card image cap" />
                <div className="card-body">
                  <h3 className="card-title">Arctic Environment Data Science</h3>
                  <p className="card-text">By using Copernicus data points combined with arctic geo measurements we will create prediction models.</p>
                  <Link to="/studytrack"><button class="btn btn-primary">Follow the learning track</button></Link>
                  </div>
              </div>
              </Col>
              
            <Col md={4} sm={12} className="margin-top-50">
            <div className="card"  >
            <img className="card-img-top card-image" src={finnishdatahubsystem} alt="Card image cap" />
                <div className="card-body">
                  <h3 className="card-title">Using Finnish Data Hub System API's</h3>
                  <p className="card-text">Learn to use FDHS for research and combine learning with R and other statistics.</p>
                  <Link to="/studytrack"><button class="btn btn-primary">Follow the learning track</button></Link>
                  </div>
              </div>
              </Col>
              </Row>
              
            {/* <div className="col-md-4 margin-top-50">
            <div className="card"  >
            <img className="card-img-top card-image" src={datascience} alt="Card image cap" />
                <div className="card-body">
                  <h3 className="card-title">Forrestry and satellites – how to measure growth and rapid development of rural forrestry areas</h3>
                  <p className="card-text">Combined knowlledge from city planning and satellite technologies available together for smart city planning.</p>
                  <Link to="/studytrack"><button class="btn btn-primary">Follow the learning track</button></Link>
                  </div>
              </div>
          </div> */}


        </div>
        
        </ ScrollableAnchor>
        </div>
    );
  }
}

export default CardRow;
