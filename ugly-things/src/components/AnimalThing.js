import React, { Component } from 'react'
import AnimalThingForm from './AnimalThingForm'

class AnimalThing extends Component {
    constructor(props){
        super(props)
        this.state = {
            isEditing: false,
            title: props.title,
            description: props.description,
            imgUrl: props.imgUrl
            
        }
    }

    editToggler = () => {
        this.setState(prevState => ({ isEditing: !prevState.isEditing }))
    }


    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        const id = this.props._id
        const updates = {
            title: this.state.title,
            description: this.state.description,
            imgUrl: this.state.imgUrl
        }
        this.props.handleEdit(id, updates)
        this.editToggler()
    }


    

        render(){  
            return(
        <div>
             { !this.state.isEditing ?
            <>
                <h1 className="fancyAnimals">{this.props.title}</h1>
                <p className="fancyDescription">{this.props.description}</p>
                <img className="fancyPic" alt="animals" src={this.props.imgUrl}  />
                <button onClick={() => this.props.handleDelete(this.props._id)}>Delete</button>
                <button onClick={this.editToggler}>Edit</button>

            </> 
            :
            <>
             <AnimalThingForm 
             title={this.state.title}
             description={this.state.description}
             imgUrl={this.state.imgUrl}
             handleChange={this.handleChange}
             handleSubmit={this.handleSubmit}
             />
              <button onClick={this.editToggler}>Done</button>
              </>
             }
            </div> 
            )
        }
}

export default AnimalThing
