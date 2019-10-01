import React, { Component } from 'react'   
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import Home from './Home'
import AppNavbar from './Navbar'
import About from './About'
import AgentPageForm from './AgentPageForm'
import './style.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      streetAddress: "",
      city: "",
      state: "",
      propData: []
    }
  }

  componentDidMount() {

    // axios.get(`https://api.estated.com/property/v3?token=Ku8F3n7O1Gaj4As0CZ9FqY9xZoX0GT&address=151+Battle+Green+Dr&city=Rochester&state=NY&zipcode=14624`)
    axios.get('https://api.vschool.io/animalthings/todo/')
    .then(res => {
      this.setState({
        propData: res.data

      });
    })
    .catch(err => console.log(err));
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    }


  render(){
    return (
      <div>
        <AppNavbar className='menuBar' />
          <Switch>
              <Route path="/home" component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/agentPageForm" component={AgentPageForm}></Route>
          </Switch>
          <AgentPageForm 
          streetAddress={this.state.streetAddress}
          city={this.state.city}
          state={this.state.state}
          propData={this.state.propData}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          />

      </div>
    );
  }

}
  


export default App;
