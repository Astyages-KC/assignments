import React from 'react'


const AgentPageForm = props => {
        return(

<form>
          <input
          type="text"
          name="streetAddress"
          value={props.streetAddress}
          onChange={props.handleChange}
          placeholder="streetAdress" /><br />
          <input
          type="number"
          name="zipCode"
          value={props.zipCode}
          onChange={props.handleChange}
          placeholder="zipCode" /><br />
          <input
          type="radio"
          name="forRentorSale"
          value="rent"
          onChange={props.handleChange}
          placeholder="forRent" /><br />
          <input
          type="radio"
          name="forRentorSale"
          value="sale"
          onChange={props.handleChange}
          placeholder="forSale" />
          <input
          alt="imaged"
          type="image"
          name="imgUrl"
          value={props.imgUrl}
          // onChange={handleChange}
          placeholder="imgUrl" />
          <br />
          <button>Submit</button>
        </form>
        )
}

export default AgentPageForm