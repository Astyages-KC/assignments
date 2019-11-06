import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserProvider.js";

const initState = {
  streetAddress: "",
  city: "",
  state: "",
  zipCode: "",
  forRentOrSale: "",
  price: ""
};

function PropertyForm() {
  const { handleNewPost } = useContext(UserContext);

  const [inputs, setInputs] = useState(initState);

  const handleChange = e => {
    const { name, value } = e.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleNewPost(inputs);
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
          value={inputs.streetAddress}
          onChange={handleChange}
          placeholder="Address"
        />
        <br />
        City:
        <input
          type="text"
          name="city"
          className="propertyForm"
          value={inputs.city}
          onChange={handleChange}
          placeholder="City"
        />
        <br />
        State:
        <input
          type="text"
          name="state"
          className="propertyForm"
          value={inputs.state}
          onChange={handleChange}
          placeholder="State"
        />
        <br />
        Zip Code:
        <input
          type="number"
          name="zipCode"
          className="propertyForm"
          value={inputs.zipCode}
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
          value={inputs.price}
          onChange={handleChange}
          placeholder="Price"
        /><br />
        <button>Submit</button>
        
      </form>
      {
        //mapped editable/deletable listings
        //map through each property and return an 'edit property form',
        //passing in the property's id and information
        //This form also needs a handleDelete, and a handleEdit function
      }
    </div>
  );
}

export default PropertyForm;
