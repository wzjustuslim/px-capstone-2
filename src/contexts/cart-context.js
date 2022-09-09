import React from "react";
const CartContext = React.createContext({
  items: [],
  qty: 0,
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;