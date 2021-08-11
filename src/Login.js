import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./Login.css";
import LoginButton from "./component/LoginButton";
// import { withAuth0 } from '@auth0/auth0-react';

class Login extends React.Component {
  render() {
    // const { isAuthenticated } = this.props.auth0;

    return (
      // !isAuthenticated &&
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>Click Below to Log In</Card.Text>
          <LoginButton />
          {/* TODO: add a `LoginButton` component here that will log the user in with Auth0 */}
        </Card.Body>
      </Card>
    );
  }
}

export default Login;
