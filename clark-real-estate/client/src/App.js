import React from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home"
import AboutUs from "./AboutUs";
import AgentPage from "./AgentPage";


function App() {
  return (
    <div>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/agentpage" component={AgentPage} />
        </Switch>
      
    </div>
  );
}

export default App;
