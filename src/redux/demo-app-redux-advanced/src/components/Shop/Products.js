import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your fav products</h2>
      <ul>
        <ProductItem
          title="Test"
          price={10}
          description="This is a test product"
        />
      </ul>
    </section>
  );
};

export default Products;
