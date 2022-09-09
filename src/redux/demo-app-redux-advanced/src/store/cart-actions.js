import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(process.env.REACT_APP_CART_API_KEY);

      if (!response.ok) {
        throw new Error("Couldn't fetch data");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Adding to cart",
      })
    );

    const sendReq = async () => {
      const response = await fetch(process.env.REACT_APP_CART_API_KEY, {
        method: "PUT",
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
        }),
      });

      if (!response.ok) {
        throw Error("Sending data failed");
      }
    };
    try {
      await sendReq();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Successfully added to cart",
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Failed to add to cart",
        })
      );
    }
  };
};
