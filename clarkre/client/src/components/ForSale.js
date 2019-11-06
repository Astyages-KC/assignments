import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";

function ForSale() {
  //   const { posts } = useContext(UserContext);
  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    axios
      .get("/public/sale")
      .then(res => {
          setPosts(res.data)         
      })
      .catch(err => console.log(err.data));
  }, []);

  const mappedposts = posts.map((post, index) => (
    <div key={index}>
      <p>
        Address: {post.streetAddress}, {post.city}, {post.state} {post.zipCode}
      </p>
      <p>For Sale or Rent: {post.forRentOrSale}</p>
      <p>Price: {post.price}</p>
      <p>Listed on: {moment(post.createdOn).format("MMMM Do YYYY")}</p>
      <p>Created by: {post.username}</p>
    </div>
  ));
  return <div>{mappedposts}</div>;
}

export default ForSale;
