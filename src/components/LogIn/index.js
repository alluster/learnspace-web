import React, { Component } from "react";
import { withRouter } from "react-router";
import app from "../../firebase";

import LoginView from "./LoginView";

class LoginContainer extends Component {
  handleSignIn = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/home");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return <LoginView onSubmit={this.handleSignIn} />;
  }
}

export default LoginContainer;