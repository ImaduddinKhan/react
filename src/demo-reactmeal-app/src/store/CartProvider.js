import React, { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADDING_ITEM") {
    const updatedItems = state.items.concat(action.item); //concate gives us brand new array
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVING_ITEM") {
  }
  return defaultCartState;
};

export const CartProvider = (props) => {
  const [cartState, dispatchCartAct] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAct({ type: "ADDING_ITEM", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAct({ type: "REMOVING_ITEM", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
