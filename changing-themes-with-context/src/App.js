import React from 'react'
import { withCount } from './context/CountProvider.js'
import Home from './Home'
import Navbar from './Navbar'
import Footer from './Footer'

const App = (props) => {
  return (
    <NavBar />
    <Home /> 
    <div className={`home-${props.theme}`}>
      <h1>{props.count}</h1>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.changeTheme}>Change Theme</button>
      <Footer />
    </div>
  )
}

export default withCount(App)