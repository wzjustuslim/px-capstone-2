export const CartReducer = (state, action) => {
  console.log(action.type)
  if (action.type === "ADD") {
    const updatedTotalAmount = state.totalAmount + action.item.price;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    console.log("Does cart has item? Reply:" + existingCartItem)
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        qty: existingCartItem.qty + 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.qty === 1) {
      //remove item from list
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      //decrease amount
      const updatedItem = {...existingItem, qty: existingItem.qty - 1}
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "ADD_ONE") {
    return 0;
  } else if (action.type === "REMOVE_ONE") {
    return 0;
  } else return state;
};
