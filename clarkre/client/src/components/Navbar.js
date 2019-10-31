import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props){
    return (
        <div>
            <Link to='/agentpage'>Navbar page</Link>
            <Link to='/profile'>Agent Profile</Link>
            <button onClick={props.logout} >Logout</button>
        </div>
    )
}

export default Navbar