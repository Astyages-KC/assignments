import React from 'react'

const NameBadge = props => {
    const { firstName, lastName, email, placeOfbirth, phoneNumber, favoriteFood, aboutYourself } = props

return (
    <div>
      <form className="inputFormbox" onSubmit={props.handleSubmit}>
        <input required type="text" name="firstName" value={firstName} onChange={props.handleChange} placeholder="First Name" className="firstNamebox" />
        <input required type="text" name="lastName" value={lastName} onChange={props.handleChange} placeholder="Last Name" className="lastNamebox" />
        <input required type="text" name="email" value={email} onChange={props.handleChange} placeholder="Email" className="emailBox"/>
        <input required type="text" name="placeOfbirth" value={placeOfbirth} onChange={props.handleChange} placeholder="Place of Birth" className="placeBirthbox" />
        <input required type="number" name="phoneNumber" value={phoneNumber} min="6"
        onChange={props.handleChange} placeholder="Phone" className="phoneNumberbox" />
        <input required type="text" name="favoriteFood" value={favoriteFood} onChange={props.handleChange} placeholder="Favorite Food" className="favoriteFoodbox" />
        <input required type="text" name="aboutYourself" value={aboutYourself} onChange={props.handleChange} placeholder="Tell us about yourself" className="aboutYourselfbox" />
        <br />
        <button>Submit</button>
        </form>

        </div>
        )
    
}

export default NameBadge