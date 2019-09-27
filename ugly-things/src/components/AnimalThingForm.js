import React from 'react'

const AnimalThingForm = props => {
    const { title, description, imgUrl, handleChange, handleSubmit } = props
    return(
        <form className="animalFormBox" onSubmit={handleSubmit}>
            <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            placeholder="Title"/>
            <input
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
            placeholder="description"/>
            <input
            type="text"
            name="imgUrl"
            value={imgUrl}
            onChange={handleChange}
            placeholder="imgUrl"/>
            <button>Submit</button>
        </form>


    
    )
}

export default AnimalThingForm