import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserProvider.js";
import { useParams } from 'react-router-dom';
// const initState = {
//   streetAddress: "",
//   city: "",
//   state: "",
//   zipCode: "",
//   forRentOrSale: "",
//   price: ""
// };


function EditForm() {
    const { handleEdit , handleDelete, userPosts } = useContext(UserContext);
        let params = useParams();
console.log(params);

let property = userPosts.filter((prop) => {
    return params._id === prop._id
});

  const [inputs, setInputs ] = useState(property[0]);

  const handleChange = e => {
      const { name, value } = e.target;
      console.log(inputs.streetAddress)
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(inputs)
    handleEdit(inputs);
    alert ('Property Edited')
  };

  const handleDeleteSubmit = e => {
    e.preventDefault();
    console.log(inputs)
    handleDelete(inputs);
    alert ('Property Deleted')
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
          value={inputs && inputs.streetAddress}
          onChange={handleChange}
          placeholder="Address"
        />
        <br />
        City:
        <input
          type="text"
          name="city"
          className="propertyForm"
          value={inputs && inputs.city}
          onChange={handleChange}
          placeholder="City"
        />
        <br />
        State:
        <input
          type="text"
          name="state"
          className="propertyForm"
          value={inputs && inputs.state}
          onChange={handleChange}
          placeholder="State"
        />
        <br />
        Zip Code:
        <input
          type="number"
          name="zipCode"
          className="propertyForm"
          value={inputs && inputs.zipCode}
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
          value={inputs && inputs.price}
          onChange={handleChange}
          placeholder="Price"
        /><br />
        <button>Verify Edit</button>
        
      </form>
      <button onClick={handleDeleteSubmit}>Verify Delete</button>
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
