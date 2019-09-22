import React from "react"

const Info = props => {
    const { firstName, lastName, email, placeOfbirth, phoneNumber, favoriteFood, aboutYourself } = props

    return (
        <div className="outputFormbox"><br />
        <p className="badge" style={{backgroundColor: props.indexnum % 2 === 0 ? "red" : "blue"}}>Badge:</p>
            <p className="outputName">Name: {firstName} {lastName}</p>
            <p className="outputphoneNumber">Phone Number: {phoneNumber}</p>
            <p className="outputplaceOfbirth">Place of Birth: {placeOfbirth}</p>
            <p className="outputfavoriteFood">Favorite Food: {favoriteFood}</p>
            <p className="outputemail">Email: {email}</p><br />
            <p className="outputaboutYou">{aboutYourself}</p>
    </div>
    )
}

export default Info