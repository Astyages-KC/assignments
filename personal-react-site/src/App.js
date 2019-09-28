import React, { Component } from 'react'
import AgentPageForm from './components/AgentPageForm.js'
import Home from './components/Home.js'


  class App extends Component {
    constructor(){
      super()
      this.state = {
        // propertyInfo: [],
        streetAddress: "",
        zipCode: 0,
        forRentorSale: "rent",
        price: 0,
        imgUrl: "",
      }
    }
    

    handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

  
  render(){
    return(
      <div>
        <AgentPageForm 
        streetAddress={this.state.streetAddress}
        zipCode={this.state.zipCode}
        forRentorSale={this.state.forRentorSale}
        imgUrl={this.state.imgUrl}
        handleChange={this.handleChange}
        />
        <Home />
      </div>
    )
  }
}

export default App;