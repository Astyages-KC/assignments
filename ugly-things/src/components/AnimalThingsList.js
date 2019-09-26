import React from "react"
import AnimalThing from './AnimalThing.js'

const AnimalThingsList = props => {

    const mappedThings = props.animalThings.map(thing => <AnimalThing {...thing} key={thing._id} handleDelete={props.handleDelete} />)

    return (
        <div>
            
            {mappedThings}
        </div>
    )
}

export default AnimalThingsList