import React, { useContext } from "react";
import Auth from "./components/Auth.js";
import Home from "./components/Home.js"
import Navbar from "./components/Navbar.js"
import AgentPage from "./components/AgentPage.js"
import Profile from "./components/Profile.js"
import { Switch, Route, Redirect } from "react-router-dom";
import { UserContext } from "./context/UserProvider.js";

function App() {
  const { token, logout } = useContext(UserContext)
  return (
    <div>
      { token && <Navbar logout={logout}/> }
      <Switch>
        <Route exact path="/" render={rProps => token ? 
            <Redirect to="/agentpage/"/> : <Auth {...rProps} />} />
        <Route path="/home" render={rProps => <Home />} />
        <Route path="/agentpage" render={rProps => token ? <AgentPage {...rProps} /> : <Redirect to="/"/>} />
        <Route path="/profile" render={rProps => token ? <Profile {...rProps} /> : <Redirect to="/"/>} />
      </Switch>
    </div>
  )
};

export default App;