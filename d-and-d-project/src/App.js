import React from 'react'  
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Charbuild from './Charbuild'
import AppNavbar from './Navbar'
import About from './About'

const App = () => {

    return (
      <div>
        <AppNavbar className='menuBar' />
          <Switch>
              <Route path="/home" component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/charbuild" component={Charbuild}></Route>
          </Switch>
      </div>
    );
}


export default App;