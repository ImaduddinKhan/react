import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "A test product",
    description: "A beautiful test product",
  },
  {
    id: "p2",
    price: 6,
    title: "Another test product",
    description: "A beautiful another test product",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your fav products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
