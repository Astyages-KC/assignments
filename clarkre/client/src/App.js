import React, { useContext } from "react";
import Auth from "./components/Auth.js";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import AgentPage from "./components/AgentPage.js";
import AboutUs from "./components/AboutUs.js";
import ForRent from "./components/ForRent.js";
import ForSale from "./components/ForSale.js";
import ProtectedRoute from "./shared/ProtectedRoute.js";
import { Route, Switch, Redirect } from "react-router-dom";
import { UserContext } from "./context/UserProvider.js";
import './styles/style.css';
import './styles/navbar.css';
import './styles/authform.css';
import './styles/agentpage.css';


function App() {
  const { token, logout } = useContext(UserContext);
  return (
    <div>
      <Navbar token={token} logout={logout}/>
      <Switch>
      <Route exact path="/" render={rProps => <Home/>}/>
      <Route path="/forsale" render={rProps => <ForSale/>}/>
      <Route path="/forrent" render={rProps => <ForRent/>}/>

      <Route path='/auth' render={rProps => token ? <Redirect to="/agentpage/"/> : <Auth {...rProps} />} />

        <ProtectedRoute
          path="/agentpage"
          component={AgentPage}
          redirectTo="/"
        /> 
 
        <ProtectedRoute 
        path="/aboutus" 
        component={AboutUs} 
        redirectTo="/" 
        /> 
      </Switch>
    </div>
  );
}

export default App;
