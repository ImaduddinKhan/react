import React, { Fragment, useContext, useState } from "react";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDitSubmit] = useState(false);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}Rs`;
  const hasAnyItem = cartCtx.items.length > 0;

  const removeCartItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const addCartItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    if (!isCheckout) {
      setIsCheckout(true);
    }
  };

  const checkoutHandler = async (userData) => {
    setIsSubmitting(true);

    await fetch(process.env.REACT_APP_ORDERS_API_KEY, {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items,
      }),
    });
    setIsSubmitting(false);
    setDitSubmit(true);
    cartCtx.clearCart();
  };

  const hideOrderActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasAnyItem && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          title={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addCartItemHandler.bind(null, item)}
          onRemove={removeCartItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const cartModelContent = (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onCancel={props.onClose} onCheckout={checkoutHandler} />
      )}
      {!isCheckout && hideOrderActions}
    </Fragment>
  );

  const isSubmittingContentModel = <p>Placing your order...</p>;
  const didSubmitModelContent = (
    <Fragment>
      <p>Successfully placed your order.</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Fragment>
  );

  return (
    <Modal onBackdropClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModelContent}
      {isSubmitting && isSubmittingContentModel}
      {!isSubmitting && didSubmit && didSubmitModelContent}
    </Modal>
  );
};

export default Cart;
