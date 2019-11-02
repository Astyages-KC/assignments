import React from 'react';
import moment from 'moment';

const Property = (props) => {
    return(
        <div className="propertyBox">
            <p>Address: {props.streetAddress} {props.city} {props.state} {props.zipCode}</p>
            <p>For Sale or Rent: {props.forRentorSale}</p>
            <p>Price: {props.price}</p>
            <p>Listed on: {moment(props.createdOn).format("MMMM Do YYYY")}</p>
            <p>Created by: {props.username}</p>
        </div>
    )
}

export default Property