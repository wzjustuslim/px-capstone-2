import React from "react";
import List from "@mui/material/List";

const userCart = (props) => {
  // initialize cartItems
  const cartItems = [];
  //when add to cart button clicked, it sends the item details to cart
  cartItems.push({
    item: "324erw",
    name: "pokeball",
    qty: 5,
  });
  // Click second item example:
  cartItems.push({
    item: "14er2w",
    name: "Super Heal",
    qty: 6,
  });

  const cartObject = (
    <ul className='cart-items'>
      {cartItems.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return <List>{cartObject}</List>;
};

export default userCart;
