export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const updatedTotalQty = state.totalQty + action.item.price;
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;
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
        totalQty: updatedTotalQty,
      };
    case "REMOVE":
      return 0;
    case "ADD_ONE":
      return 0;
    case "REMOVE_ONE":
      return 0;

    default:
      return state;
  }
};
