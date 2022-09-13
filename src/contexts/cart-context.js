import React from "react";
const CartContext = React.createContext({
  items: [],
  totalQty: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;