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
  const newfirstName = this.state.firstName
  const newlastName = this.state.lastName
  const newEmail = this.state.email
  const newplaceOfbirth = this.state.placeOfbirth
  const newphoneNumber = this.state.phoneNumber
  const newfavoriteFood = this.state.favoriteFood
  const newaboutYourself = this.state.aboutYourself

  this.setState(prevState => ({
    info: [...prevState.info, newfirstName, newlastName, newEmail, newplaceOfbirth, newphoneNumber, newfavoriteFood, newaboutYourself],
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
          <Info {...info} key={i} /> ) }
        </div>
    </div>
    )
  }
}

export default App;
