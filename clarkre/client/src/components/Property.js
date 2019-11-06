import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';



const Property = (props) => {
    return(
        <div className="propertyBox">
            <Link to={'/editform/' + props._id} className='linkstyle'>Edit</Link>
            <Link to={'/editform/' + props._id} className='linkstyle'>Delete</Link>
            <p>Address: {props.streetAddress}, {props.city}, {props.state} {props.zipCode}</p>
            <p>For Sale or Rent: {props.forRentOrSale}</p>
            <p>Price: {props.price}</p>
            <p>Listed on: {moment(props.createdOn).format("MMMM Do YYYY")}</p>
            <p>Created by: {props.username}</p>
        </div>
    )
}

export default Property