import React, { Component } from 'react'

class App extends Component {
    constructor(){
        super()
        this.state = {
            bgColor: "blue",
            text: ""
        }
    }
    
    // Fires when this component first loads onto the page.
    componentDidMount(){
        window.addEventListener("keydown", (event) => {
            if(event.which === 82){
                this.setState({ bgColor: "red" })
            } else if(event.which === 66){
                this.setState({ bgColor: "blue" })
            } else if(event.which === 71){
                this.setState({ bgColor: "green" })
            }
        })
    }

    // Fires whenever new props or new state are given to this component 
    componentDidUpdate(prevProps, prevState){
        // this is checking if state's bg color has been updated, and if so
        // it will update the text in state to match it.
        if(prevState.text !== this.state.bgColor){
            this.setState({text: this.state.bgColor})
        }
    }
    
    // Fires when this component is leaving the viewable page.
    componentWillUnmount(){
        window.removeEventListener("keydown", null)
    }
    
    render(){
        console.log(this.state)
        return (
            <div>
                <div style={{
                    width: 200, 
                    height: 200, 
                    border: '1px solid black', 
                    backgroundColor: this.state.bgColor 
                }}>
                </div>
                <h1>{this.state.text}</h1>
            </div>
        )
    }
}

export default App