import React from "react"

const Pet = props => {
    return (
        <div className="petStyle">
            <p>Name: {props.name}</p>
            <p>Breed: {props.breed}</p>
        </div>
    )
}


export default Pet