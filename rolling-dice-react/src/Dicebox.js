import React, {Component} from "react"
import Die from "./Die.js"


class Dicebox extends Component {
  constructor() {
    super()
    this.state = {
      nums: []
    }
  }

random(count) {
  let newArrray = []
  for(let i=0; i < count; i++){
    newArrray.push(Math.floor(Math.random()*6)+1
    )
  }
  this.setState(firstParam, secondParam)
}

render(){
  return(
    <div>
      <button onClick={() => (this.random(5))}>Random</button>
      <Die num={this.state.nums} secondkey=' ' />
    </div>
  )
}


}

export default App