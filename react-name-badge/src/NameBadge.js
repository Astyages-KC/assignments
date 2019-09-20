import React from 'react'

const NameBadge = props => {
    const { firstName, lastName, email, placeOfbirth, phoneNumber, favoriteFood, aboutYourself } = props

return (
    <div>
      <form className="inputFormbox" onSubmit={props.handleSubmit}>
        <input type="text" name="firstName" value={firstName} onChange={props.handleChange} placeholder="First Name" className="firstNamebox" />
        <input type="text" name="lastName" value={lastName} onChange={props.handleChange} placeholder="Last Name" className="lastNamebox" />
        <input type="text" name="email" value={email} onChange={props.handleChange} placeholder="Email" className="emailBox"/>
        <input type="text" name="placeOfbirth" value={placeOfbirth} onChange={props.handleChange} placeholder="Place of Birth" className="placeBirthbox" />
        <input type="text" name="phoneNumber" value={phoneNumber}
        onChange={props.handleChange} placeholder="Phone" className="phoneNumberbox" />
        <input type="text" name="favoriteFood" value={favoriteFood} onChange={props.handleChange} placeholder="Favorite Food" className="favoriteFoodbox" />
        <input type="text" name="aboutYourself" value={aboutYourself} onChange={props.handleChange} placeholder="Tell us about yourself" className="aboutYourselfbox" />
        <br />
        <button>Submit</button>
        </form>

        </div>
        )
    
}

export default NameBadge