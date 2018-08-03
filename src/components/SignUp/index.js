import React, { Component } from "react";
import { withRouter } from "react-router";
import app from "../../firebase";
import SignUpView from "./SignUpView";


const db = app.database();

const doCreateUser = (uid, email, username) =>
db.ref(`users/${uid}`).set({
  email,
  username
});
class SignUpContainer extends Component {
  


  handleSignUp = async event => {
    event.preventDefault();
    const { email, password, username } = event.target.elements;
    try {
      const user = await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
        doCreateUser(user.uid, email.value, username.value)
        
      this.props.history.push("/home");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return <SignUpView onSubmit={this.handleSignUp} />;
  }
}

export default SignUpContainer;

