import React from "react"
import AnimalThing from './AnimalThing.js'

const AnimalThingsList = props => {

    const mappedThings = props.animalThings.map(thing => 
            <AnimalThing 
            handleEdit={props.handleEdit}
            handleDelete={props.handleDelete} 
            {...thing} 
            key={thing._id} />)

    return (
        <div>
            {mappedThings}
        </div>
    )
}

export default AnimalThingsList