import React, { Component } from 'react'


const CountContext = React.createContext()

class CountProvider extends Component {
    constructor(){
        super()
        this.state = {
            count: 0,
            theme: "dark"
        }
    }

    increment = () => {
        this.setState(prevState => ({ count: prevState.count + 1}))
    }

    changeTheme = () => {
        this.setState(prevState => ({
            theme: prevState.theme === "dark" ? "light" : "dark"
        }))
    }

    render(){
        return (
            <CountContext.Provider
            value={{
                count: this.state.count,
                increment: this.increment,
                theme: this.state.theme,
                changeTheme: this.changeTheme
            }}>
                { this.props.children }
            </CountContext.Provider>
        )
    }
}   

export const withCount = C => props => (
    <CountContext.Consumer>
            { value => <C {...value} {...props}/>}
        </CountContext.Consumer>
    )

    export default CountProvider
