import React from "react"
import Pet from "./Pet"

const Friend = props => {
let color
if(props.name === "Bob") {
    color = "#E8E795"
} else if(props.name === "Ben") {
    color = "#FFF6B0"
}   else if(props.name === "Marcus") {
    color = "#E4FFA3"
} else if(props.name === "Jacob") {
    color = "#E8D695"
}   else {
    color = "#FFE2A3"
}

const mappedPets = props.pets.map(pet =>
    <Pet 
        name={pet.name}
        breed={pet.breed}
        key={Math.random()}    
    />)

    return (
        <div className="friendStyle"
        style = {{backgroundColor: color}}>
            <h2>{props.name}</h2>
            <h4>{props.age}</h4>
            {mappedPets}
        </div>
    )
}

export default Friend
