import React, { useContext } from "react";
import Auth from "./components/Auth.js";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import AgentPage from "./components/AgentPage.js";
import Profile from "./components/Profile.js";
import ProtectedRoute from "./shared/ProtectedRoute.js";
import { Route, Switch, Redirect } from "react-router-dom";
import { UserContext } from "./context/UserProvider.js";

function App() {
  const { token, logout } = useContext(UserContext);
  return (
    <div>
      {token && <Navbar logout={logout} />}
      <Switch>
      <Route exact path="/" render={rProps => token ? 
      <Redirect to="/agentpage/"/> : <Auth {...rProps} />} />

        <ProtectedRoute 
        path="/home" 
        component={Home} 
        redirectTo="/" 
        />

        <ProtectedRoute
          path="/agentpage"
          component={AgentPage}
          redirectTo="/"
        /> 
 
        <ProtectedRoute 
        path="/profile" 
        component={Profile} 
        redirectTo="/" 
        /> 
      </Switch>
    </div>
  );
}

export default App;
