import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserProvider.js";
import { useParams } from 'react-router-dom';
const initState = {
  streetAddress: "",
  city: "",
  state: "",
  zipCode: "",
  forRentOrSale: "",
  price: ""
};


function EditForm() {
    const { handleEdit , userPosts } = useContext(UserContext);
        let params = useParams();
console.log(params);

let property = userPosts.filter((prop) => {
    return params._id == prop._id
});
property = property[0]
console.log(property);
  const [setInputs] = useState(initState);

  const handleChange = e => {
    const { name, value } = e.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleEdit(property);
  };

  //Returning the Add form
  // and the list of editable/deletable listings
  return (
    <div>
      Property Form:
      <form onSubmit={handleSubmit}>
        Street Address:
        <input
          type="text"
          name="streetAddress"
          className="propertyForm"
          value={property.streetAddress}
          onChange={handleChange}
          placeholder="Address"
        />
        <br />
        City:
        <input
          type="text"
          name="city"
          className="propertyForm"
          value={property.city}
          onChange={handleChange}
          placeholder="City"
        />
        <br />
        State:
        <input
          type="text"
          name="state"
          className="propertyForm"
          value={property.state}
          onChange={handleChange}
          placeholder="State"
        />
        <br />
        Zip Code:
        <input
          type="number"
          name="zipCode"
          className="propertyForm"
          value={property.zipCode}
          onChange={handleChange}
          placeholder="Zipcode"
        />
        <br />
        Is the property for Rent or Sale?{" "}
        <input
          type="radio"
          name="forRentOrSale"
          className="propertyForm"
          value={'rent'}
          onChange={handleChange}
          placeholder="Rent"
        />
        <input
          type="radio"
          name="forRentOrSale"
          className="propertyForm"
          value={'sale'}
          onChange={handleChange}
          placeholder="Sale"
        />
        <br />
        Price:{" "}
        <input
          type="number"
          name="price"
          className="propertyForm"
          value={property.price}
          onChange={handleChange}
          placeholder="Price"
        /><br />
        <button>Submit</button>
        
      </form>
      <div>{}</div>
      {
        //mapped editable/deletable listings
        //map through each property and return an 'edit property form',
        //passing in the property's id and information
        //This form also needs a handleDelete, and a handleEdit function
      }
    </div>
  );
}

export default EditForm;
