import React from 'react';
import {Switch, Route} from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import About from "./About"
import Footer from "./Footer"
import Contact from "./Contact"
import Services from "./Services"
import "./styles.css"

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/services" component={Services}></Route>
        <Route path="/contact" component={Contact}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
