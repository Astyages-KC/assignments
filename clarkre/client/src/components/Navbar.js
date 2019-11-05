import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props){
    return (
        <div>
            <Link to='/' className='linkstyle'>Home Page</Link>
            <Link to='/forrent' className='linkstyle'>For Rent</Link>
            <Link to='/forsale' className='linkstyle'>For Sale</Link>
            <Link to='/aboutus' className='linkstyle'>About Us</Link>
            {props.token && <Link to='/agentpage' className='linkstyle'>Property List</Link>}
            {/* {props.token && <Link to='/propertyform' className='linkstyle'>To add, edit or delete property</Link>} */}
            <Link to='/auth' className='linkstyle'>Agent Sign In</Link>
            {props.token && <button onClick={props.logout} >Logout</button>}
        </div>
    )
}

export default Navbar