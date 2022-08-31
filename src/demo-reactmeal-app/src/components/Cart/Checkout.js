import React, { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isPhoneNo = (value) => value.trim().length === 11;

const Checkout = (props) => {
  const [fromInputsValidity, setFormInputsValidity] = useState({
    name: true,
    address: true,
    phone: true,
    city: true,
  });

  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const phoneInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredPhoneIsValid = isPhoneNo(enteredPhone);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      address: enteredAddressIsValid,
      phone: enteredPhoneIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredAddressIsValid &&
      enteredPhoneIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    props.onCheckout({
      name: enteredName,
      address: enteredAddress,
      phone: enteredPhone,
      city: enteredCity,
    });
  };

  const nameControlClasses = `${classes.control} ${
    fromInputsValidity.name ? "" : classes.invalid
  }`;

  const addressControlClasses = `${classes.control} ${
    fromInputsValidity.address ? "" : classes.invalid
  }`;

  const phoneControlClasses = `${classes.control} ${
    fromInputsValidity.phone ? "" : classes.invalid
  }`;

  const cityControlClasses = `${classes.control} ${
    fromInputsValidity.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!fromInputsValidity.name && <p>Please enter valid name</p>}
      </div>
      <div className={addressControlClasses}>
        <label htmlFor="address">Street/Address</label>
        <input type="text" id="address" ref={addressInputRef} />
        {!fromInputsValidity.address && <p>Please enter valid address</p>}
      </div>
      <div className={phoneControlClasses}>
        <label htmlFor="phone">Phone/Mobile</label>
        <input type="number" id="phone" ref={phoneInputRef} />
        {!fromInputsValidity.phone && <p>Please enter valid phone</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!fromInputsValidity.city && <p>Please enter valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm Checkout</button>
      </div>
    </form>
  );
};

export default Checkout;
