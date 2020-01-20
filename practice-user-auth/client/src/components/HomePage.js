import React, { Component } from 'react'
import { withPhotos } from '../context/PhotoProvider.js'

class HomePage extends Component {

    componentDidMount(){
        this.props.getPhotos()
    }

    render(){
        return(
            <div>
                Home page
                { this.props.photos.map(photo => (
                    <div>
                      <h1>{photo.caption}</h1>
                      <img src={photo.imgUrl} width={200} alt="frank" /> 
                      </div>
                ))}
            </div>
            )
    }
}

export default withPhotos(HomePage)