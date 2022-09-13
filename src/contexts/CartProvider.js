import React, { useReducer } from "react";
import CartContext from "./cart-context";
import {CartReducer} from "./Reducers"

const defaultCartState = {
  items: [],
  totalQty: 0,
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    CartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE",
      id: id,
    });
  };
  const addOneHandler = (item) => {
    dispatchCartAction({
      type: "ADD_ONE",
      item: item,
    });
  };
  const removeOneHandler = (item) => {
    dispatchCartAction({
      type: "REMOVE_ONE",
      item: item,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalQty: cartState.totalQty,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    addOneItem: addOneHandler,
    removeOneItem: removeOneHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
