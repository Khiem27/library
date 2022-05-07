import { configureStore } from "@reduxjs/toolkit";
import AuthenticationSlice from "./Components/Authentication/AuthenticationSlice";
import ProductsSlice from "./Components/Products/ProductsSlide";
import ShoppingCartSlice from "./Components/ShoppingCart/ShoppingCartSlice";

const rootReducers = {
  AddProducts: ShoppingCartSlice,
  Products: ProductsSlice,
  Authentication: AuthenticationSlice,
};

export const store = configureStore({
  reducer: rootReducers,
});
