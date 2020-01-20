import React, { Component } from 'react'
import axios from 'axios'

const PhotoContext = React.createContext()

class PhotoProvider extends Component {
    constructor() {
        super()
        this.state = {
            photos: []
        }
    }

        getPhotos = () => {
            axios.get("/photo")
            .then(res =>{
                this.setState({
                    photos: res.data
                })
            })
            .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                <PhotoContext.Provider
                value={{
                    photos: this.state.photos,
                    getPhotos: this.getPhotos
                }}>
                    { this.props.children}
                </PhotoContext.Provider>
            </div>
        )
    } 
}

export default PhotoProvider

//functional programming paradigm
export const withPhotos = C => props => (
    <PhotoContext.Consumer>
        { value => <C {...value} {...props}/>}
    </PhotoContext.Consumer>
)