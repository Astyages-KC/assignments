import React, { Component } from 'react';
import axios from "axios"
import Person from "./Person"

class App extends Component {
  constructor() {
    super()
      this.state = {
      hitlist: [],
      personColor: ""
    }
  }

  componentDidMount(){
    axios.get("https://s3.amazonaws.com/v-school/data/hitlist.json")
   .then((response) => {
      this.setState({hitlist: response.data})
  })
}



  

render() {
  const mappedHitlist = this.state.hitlist.map(person => {
    return (
      
    <Person 
            name={person.name}
            image={person.image} />
    )
  })
  return (
    <div>
      
      { mappedHitlist }
    </div>
    )
  }
}

export default App;
