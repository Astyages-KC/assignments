import React from "react"

const Info = props => {
    const { firstName, lastName, email, placeOfbirth, phoneNumber, favoriteFood, aboutYourself } = props

    return (
        <div style={{border: "1px solid black",
    padding: 5, margin: 5}}>
            <h3>First Name: {firstName}</h3>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Place of Birth: {placeOfbirth}</p>
            <p>Phone Number: {phoneNumber}</p>
            <p>Favorite Food: {favoriteFood}</p>
            <p>About: {aboutYourself}</p>
    </div>
    )
}

export default Info