import React, { Component } from 'react'
import './styles/custom.css'
import './styles/css/bootstrap.css'
import { Button } from 'react-bootstrap'
import Navigation from './components/Navigation'
import Particles from 'react-particles-js';
import particlesjs from './components/particlesjs-config.json'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import weatherThumb from './images/weather-thumb.png'
import ScrollableAnchor from 'react-scrollable-anchor'
import createBrowserHistory from 'history/createBrowserHistory'
import { BarLoader } from 'react-spinners';

// views 
import FrontPage from './views/FrontPage'
import OrgView from './views/OrgView'
import StudyTrack from './views/StudyTrack'
import Home from "./views/Home";
import Terms from "./views/Terms";
import CourseCatalog from "./views/Coursecatalog";
import WorldChallenge from "./views/WorldChallenge";

// components
import Footer from "./components/Footer";
import NavigationInverse from './components/NavigationInverse'
import About from "./views/About";

//Login 

// import PrivateRoute from "./PrivateRoute";
import app from "./firebase";

import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

//Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faUser } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel, faUser)

class App extends Component {
  state = { loading: true, authenticated: false, user: null };

  componentWillMount() {
    app.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          email: user.email,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }


  render() {
    const { authenticated, loading, email } = this.state;
    if (loading) {
      return <div  className="loader-spinner"
      >

        <BarLoader
          color={'#fc3d22'}
          loading={this.state.loading} />
      </div>
    }
    return (


      <Router >
        <div>

          {/* <Navigation authenticated={authenticated} userEmail={email} /> */}
          <Route path="/login" exact render={() => <NavigationInverse authenticated={authenticated} userEmail={email} />} />

          <Route exact path="/login" component={LogIn} />
          <Route path="/signup" exact render={() => <NavigationInverse authenticated={authenticated} userEmail={email} />} />

          <Route exact path="/signup" component={SignUp} />
          <Route path="/" exact render={() => <Navigation authenticated={authenticated} userEmail={email} />} />
          <Route path="/" exact component={FrontPage} />
          <Route path="/studytrack" exact render={() => <Navigation authenticated={authenticated} userEmail={email} />} />
          <Route path="/studytrack" exact component={StudyTrack} />
          <Route path="/orgview" exact render={() => <NavigationInverse authenticated={authenticated} userEmail={email} />} />
          <Route path="/orgview" exact component={OrgView} />
          <Route path="/home" exact render={() => <NavigationInverse authenticated={authenticated} userEmail={email} />} />
          <Route path="/home" exact component={Home} />
          <Route path="/about" exact render={() => <NavigationInverse authenticated={authenticated} userEmail={email} />} />
          <Route path="/about" exact component={About} />
          <Route path="/terms" exact render={() => <NavigationInverse authenticated={authenticated} userEmail={email} />} />
          <Route path="/terms" exact component={Terms} />
          <Route path="/coursecatalog" exact render={() => <NavigationInverse authenticated={authenticated} userEmail={email} />} />
          <Route path="/coursecatalog" exact component={CourseCatalog} />
          <Route path="/worldchallenge" exact render={() => <NavigationInverse authenticated={authenticated} userEmail={email} />} />
          <Route path="/worldchallenge" exact component={WorldChallenge} />
          <Footer />
        </div>

      </Router>
    );
  }
}

export default App;
