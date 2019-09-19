import React, { Component } from 'react';
// import Controls from './Controls.js'
import Smalltime from './Smalltime'


class App extends Component {
  constructor(){

    super()
    this.state = {
      box1: "white",
      box2: "black",
      box3: "white",
      box4: "black"
    }
  }

whiteToBlackColor = () => {
    this.setState({
      box1: this.state.box1 === "white" ? "black" : "white", 
      box2: this.state.box2 === "black" ? "white" : "black",
      box3: this.state.box3 === "white" ? "black" : "white", 
      box4: this.state.box4 === "black" ? "white" : "black"
    })
}

purpleBox = () => {
  this.setState({
    box1: this.state.box1 === "purple" ? "white" : "purple",
    box2: this.state.box2 === "white" ? "purple" : "white",
    box3: this.state.box3 === "white" ? "black" : "white", 
    box4: this.state.box4 === "black" ? "white" : "black"

  })
}

bigTimeBlue = () => {
  this.setState({
    box1: this.state.box1 === "white" ? "black" : "white", 
    box2: this.state.box2 === "black" ? "white" : "black",
    box3: this.state.box3 === "black" ? "blue" : "black", 
    box4: this.state.box4 === "blue" ? "white" : "blue"
    
  })
}
bigTimeDj = () => {
  this.setState({
    box1: this.state.box1 === "pink" ? "yellow" : "pink", 
    box2: this.state.box2 === "yellow" ? "purple" : "yellow",
    box3: this.state.box3 === "red" ? "yellow" : "red", 
    box4: this.state.box4 === "green" ? "blue" : "green"
    
  })
}


render (){
  return (
    <div> 
      <Smalltime {...this.state} whiteToBlackColor={this.whiteToBlackColor} purpleBox={this.purpleBox} bigTimeBlue={this.bigTimeBlue} bigTimeDj={this.bigTimeDj} />
        </div>
    );
  }
}

export default App;
