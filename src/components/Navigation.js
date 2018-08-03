import React, { Component } from 'react';
import '../styles/css/bootstrap.css';
import { NavLink, Link, Redirect } from 'react-router-dom';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, } from "react-bootstrap";
import '../styles/custom.css'
import app from "../firebase";
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTop: true
    };
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.onScroll(isTop);
      }
    });
  }

  onScroll(isTop) {
    this.setState({ isTop });
  }
  handleLogout() {
    app.auth().signOut()
          .then(function () {
            return <Redirect to='/frontpage' />
            
          })
          .catch(function (error) {
          });

}

  render() {





    const { login } = this.props
    const logoMargin = { marginTop: "5px" }


    return (
      <div className="absolute" >
        <Navbar className={`text-navbar-transparent ${!this.state.isTop ? 'navbar-transparent-scrolled' : ''}`} fixedTop collapseOnSelect transparent bsStyle="transparent">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/"><h5 className="logo-font text-white">LEARNSPACE</h5></Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>

            <NavItem>
                <NavLink to="/coursecatalog">
                  <span className="small text-white"><h5><strong>Course catalog</strong></h5></span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about">
                  <span className="small text-white"><h5><strong>About</strong></h5></span>
                </NavLink>
              </NavItem>
              {
                this.props.authenticated === false ?
                <Nav>
                  <NavItem>
                    <NavLink to="/login">
                      <span className="small text-white"><h5><strong>Login</strong></h5></span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <Link to="/signup">
                      <button className="btn btn-primary btn-sm">Register as a user</button>
                    </Link>
                  </NavItem>
                  </Nav>

                :
                  <Nav>
                  <NavItem >
                    <span className="text-white" className="small"><h5>{this.props.userEmail}</h5></span>
                  </NavItem>
                  <NavItem >
                    <span className="text-white" className="small"><h5><FontAwesomeIcon icon="user" size='1x' /></h5></span>
                  </NavItem>
                  <NavItem >
                    <button onClick={this.handleLogout} className="btn btn-primary btn-sm">Logout</button>
                  </NavItem>
                  </Nav>
            }
            </Nav>

          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }

}
export default Navigation;

