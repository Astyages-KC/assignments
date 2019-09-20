import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state ={
      firstName: "",
      names: []
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
}

handleSubmit = (event) => {
  event.preventDefault()
  const newName = this.state.firstName
  this.setState(prevState => ({
      names: [...prevState.names, newName],
      firstName: ""
  }))
}



render(){
  const mappedNames = this.state.names.map((name, i) => <h1 key={i}> {name} </h1>) 
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="Name" />
        <button>Push</button>
      </form>
      <div>
        {mappedNames}
      </div>
    </div>
  )
}

}




export default App