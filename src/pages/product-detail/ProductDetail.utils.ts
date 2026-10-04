import { PRODUCTS, type Product } from "../../data/products";

export const findProduct = (id: string): Product | undefined => {
  const findedProduct = PRODUCTS.find((product) => {
    return product.id.toString() === id;
  });
  return findedProduct;
};
