import React, { Component } from 'react'

class App extends Component {
  constructor(){
    super()
    this.state = {
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      num5: 0,
      diceRoll: []
    }
  }

  hadleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handelSubmit = (e) => {
    e.preventDefault()
    const num1 = this.state.num1
    const num2 = this.state.num2
    const num3 = this.state.num3
    const num4 = this.state.num4
    const num5 = this.state.num5
    const randNum = Math.floor(Math.random() * 6)
    const object = {num1, num2, num3, num4, num5, randNum}
    this.setState(prevState => ({
      diceRoll: [object, ...prevState.info],
    }))
    console.log(object)
  }

  render(){
    return (
      <div>

      <button onClick={this.handelSubmit}>random{this.hadleChange}</button>

      </div>
            
    )
  }
}
export default App