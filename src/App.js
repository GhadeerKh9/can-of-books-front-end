import React from 'react';
import Login from './Login'
import Profile from './component/Profile'
import LogoutButton from './component/LogoutButton'
import Bookshelf from './component/Bookshelf'
// import BrowserRouter from './component/BrowserRouter'
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import 
{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    console.log('app', this.props);
    return(
      <>
        <Router>
            <Header />
            <Switch>
              <Route exact path="/" >
                <Login/>
                <Bookshelf />
                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              </Route>
              <Route exact path="/profile"> 
             
             {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}

              </Route >

            </Switch>

            <Footer />
        </Router>
      </>
    );
  }
}

export default App;
