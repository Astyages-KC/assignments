import React, {Component} from 'react'
import axios from "axios"

class Person extends Component {
    constructor() {
        super()
        this.state = {
            personColor: ""
        }
    }

componentDidMount(){
    axios.get("http://www.colr.org/json/color/random")
      .then((response) => { 
          console.log(response.data)
        this.setState({personColor: response.data.colors[0].hex
        })
      })
}

render(){
    
    return(
        <div>
            <p className="mafiaHits" style={{backgroundColor: ("#"+this.state.personColor)}}>
                {this.props.name}
            </p>
            <img alt="this.props.name" src={this.props.image}></img>
        </div>
    )
}

}



export default Person
