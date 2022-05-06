import { createSlice } from "@reduxjs/toolkit";

export const ShoppingCartSlice = createSlice({
  name: "counter",
  initialState: {
    value: [],
  },
  reducers: {
    addProducts: (state, action) => {
      const localProductsData = localStorage.getItem("Products");
      const dataParse = JSON.parse(localProductsData);
      if (dataParse) {
        state.value = dataParse;
      }

      state.value.push(action.payload);
      localStorage.setItem("Products", JSON.stringify(state.value));
      window.scrollTo(0, 0);
    },
  },
});

const { reducer, actions } = ShoppingCartSlice;

export const { addProducts } = actions;
export default reducer;
