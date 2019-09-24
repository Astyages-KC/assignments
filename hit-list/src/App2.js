import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
    constructor(){
        super()
        this.state = {
            hitlist: [],
            name: "",
            image: ""
        }
    }

componentDidMount(){
    axios.get("https://s3.amazonaws.com/v-school/data/hitlist.json")
    .then((response) => {
        this.setState({hitlist: response.data})
    })
}

render() {
    const mappedHitlist = this.state.hitlist.map(name => {
        return <h1></h1>
    })
}

}