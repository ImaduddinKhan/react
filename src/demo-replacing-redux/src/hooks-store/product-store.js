import { initStore } from "./store";

const configureProductStore = () => {
  const actions = {
    TOGGLE_FAV: (currState, productId) => {
      const productIndex = currState.products.findIndex(
        (p) => p.id === productId
      );
      const newFavStatus = !currState.products[productIndex].isFavorite;
      const updatedProducts = [...currState.products];
      updatedProducts[productIndex] = {
        ...currState.products[productIndex],
        isFavorite: newFavStatus,
      };
      return { products: updatedProducts };
    },
  };

  initStore(actions, {
    products: [
      {
        id: "p1",
        title: "Red Scarf",
        description: "A pretty red scarf.",
        isFavorite: false,
      },
      {
        id: "p2",
        title: "Blue T-Shirt",
        description: "A pretty blue t-shirt.",
        isFavorite: false,
      },
      {
        id: "p3",
        title: "Green Trousers",
        description: "A pair of lightly green trousers.",
        isFavorite: false,
      },
      {
        id: "p4",
        title: "Orange Hat",
        description: "Street style! An orange hat.",
        isFavorite: false,
      },
    ],
  });
};

export default configureProductStore;
