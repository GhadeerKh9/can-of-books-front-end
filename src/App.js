import React from "react";
import Login from "./Login";
import Profile from "./component/Profile";
import LogoutButton from "./component/LogoutButton";
import BestBooks from "./BestBooks";
// import BrowserRouter from './component/BrowserRouter'
import Header from "./Header";
import IsLoadingAndError from "./IsLoadingAndError";
import Footer from "./Footer";
import { withAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    console.log("app", this.props);
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Login />
              {this.props.auth0.isAuthenticated && <BestBooks />}

              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
            </Route>
            <Route exact path="/profile">
              {" "}
              <Profile />
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
            </Route>
          </Switch>

          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
