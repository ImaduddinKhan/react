import classes from "./Cart.module.css";
import Card from "../UI/Card/Card";
import CartItem from "./CartItem";

const Cart = (props) => {
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{ title: "test-item", quantity: 3, total: 20, price: 10 }}
        />
      </ul>
    </Card>
  );
};

export default Cart;
