import React, {Component} from 'react';
import NameBadge from './NameBadge';
import Info from "./Info"
import "./styles.css"

class App extends Component {
  constructor(){
    super()
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      placeOfbirth: "",
      phoneNumber: "",
      favoriteFood: "",
      aboutYourself: "",
      info: []
    }
  }

handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleSubmit = (e) => {
  e.preventDefault()
  const firstName = this.state.firstName
  const lastName = this.state.lastName
  const email = this.state.email
  const placeOfbirth = this.state.placeOfbirth
  const phoneNumber = this.state.phoneNumber
  const favoriteFood = this.state.favoriteFood
  const aboutYourself = this.state.aboutYourself
  const object = {
    firstName, lastName, email, placeOfbirth, phoneNumber, favoriteFood, aboutYourself
  }
  console.log(object)
  this.setState(prevState => ({
    info: [object, ...prevState.info],
    firstName: "",
    lastName: "",
    email: "",
    placeOfbirth: "",
    phoneNumber: "",
    favoriteFood: "",
    aboutYourself: ""
  }))
}

render(){
console.log(this.state)
  return (
    <div>
      <NameBadge
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        email={this.state.email}
        placeOfbirth={this.state.placeOfbirth}
        phoneNumber={this.state.phoneNumber}
        favoriteFood={this.state.favoriteFood}
        aboutYourself={this.state.aboutYourself} />
        <div>
          { this.state.info.map((info, i) => 
          <Info {...info} key={i} indexnum={i+1} /> ) }
        </div>
    </div>
    )
  }
}

export default App;
