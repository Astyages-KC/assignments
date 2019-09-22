import React, { Component } from 'react';

class App extends Component {
  constructor () {
    super()
    this.state = {
      diceCurrentOutput: {
        num1: 0,
        num2: 0,
        num3: 0,
        num4: 0,
        num5: 0
      },
      selectedDice: {},
      diceRoll: this.diceRoll
    }
  }
  
  mapObject(object, callback) {
    return Object.keys(object).map(key => {
      return callback(key, object[key]);
    });
  }

  handleRoll () {
    let output = {}
    for( let key in this.state.diceCurrentOutput) {
    
      output[key] = Math.floor(Math.random() * 6);
    }
    this.setState(prevState => {

     return { 
        ...prevState, diceCurrentOutput: {...prevState.diceCurrentOutput, output}
      };
    });
  
  }
  render(){
    return(
      <div>
        <button onClick={this.handleRoll} type="button">roll</button>
        {
                   
            this.mapObject(this.state.diceCurrentOutput,(key, value) => {
              return <div>{key}: {value}</div>
            
          })
        }
      </div>
    )
  }

}
  
 

export default App;
