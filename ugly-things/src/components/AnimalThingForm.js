import React from 'react'

const AnimalThingForm = props => {
    return(
        <form className="animalFormBox" onSubmit={props.handleSubmit}>
            <input
            type="text"
            name="title"
            value={props.title}
            onChange={props.handleChange}
            placeholder="Title"/>
            <input
            type="text"
            name="description"
            value={props.description}
            onChange={props.handleChange}
            placeholder="description"/>
            <input
            type="text"
            name="imgUrl"
            value={props.imgUrl}
            onChange={props.handleChange}
            placeholder="imgUrl"/>
            <button>Submit</button>
        </form>
        

    
    )
}

export default AnimalThingForm