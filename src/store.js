import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./Components/Products/ProductsSlide";
import ShoppingCartSlice from "./Components/ShoppingCart/ShoppingCartSlice";

const rootReducers = {
  AddProducts: ShoppingCartSlice,
  Products: ProductsSlice,
};

export const store = configureStore({
  reducer: rootReducers,
});
