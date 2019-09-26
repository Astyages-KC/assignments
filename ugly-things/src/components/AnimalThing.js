import React from 'react'

const AnimalThing = props => {
    console.log(props)
    return (
        <div>
            <h1 className="fancyAnimals">{props.title}</h1>
            <p className="fancyDescription">{props.description}</p>
            <img className="fancyPic" alt="animals" src={props.imgUrl}  />
            <button onClick={() => props.handleDelete(props._id)}>Delete</button>
            <button onClick={() => props.handleEdit(props._id)}>Edit</button>
        </div>
    )
}

export default AnimalThing