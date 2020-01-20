import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./components/HomePage.js";
import Navbar from "./components/Navbar.js";
import Auth from "./components/Auth.js";
import { withUser } from "./context/UserProvider.js";

class App extends Component {
  render() {
    const { token } = this.props;
    return (
      <div>
        <Navbar />
        <Switch>
          <Route 
          exact path="/" 
          render={rProps => <HomePage {...rProps} />} />
          <Route
            path="/auth"
            render={rProps =>
              token ? <Redirect to="/" /> : <Auth {...rProps} />
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
