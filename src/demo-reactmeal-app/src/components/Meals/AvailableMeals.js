import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Handi",
    description: "White and red tasty handi",
    price: 249.99,
  },
  {
    id: "m2",
    name: "Shahi daal",
    description: "Spicy shahi dall with extra SAALAN",
    price: 199.99,
  },
  {
    id: "m3",
    name: "Chicken karai",
    description: "Full chiken karai with extra wings",
    price: 299.99,
  },
  {
    id: "m4",
    name: "Sikh kebab",
    description: "Four finest sikh kebab per meal",
    price: 299.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      title={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
