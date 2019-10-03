import React from 'react'  
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Charbuild from './Charbuild'
import AppNavbar from './Navbar'
import About from './About'
import ClassInfo from './ClassInfo'

const App = () => {

    return (
      <div>
        <AppNavbar className='menuBar' />
          <Switch>
              <Route path="/home" component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/charbuild" component={Charbuild}></Route>
              <Route path="/classinfo" component={ClassInfo}></Route>
          </Switch>
      </div>
    );
}


export default App;