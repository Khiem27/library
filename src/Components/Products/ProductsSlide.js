import { createSlice } from "@reduxjs/toolkit";

export const ProductsSlice = createSlice({
  name: "counter",
  initialState: {
    value: [],
  },
  reducers: {
    AddToCart: (state, action) => {
      let item = action.payload;
      let valueFindIndex;
      const localCartData = localStorage.getItem("cart");
      const dataCartParse = JSON.parse(localCartData);
      if (dataCartParse) {
        state.value = dataCartParse;
        const index = dataCartParse.findIndex((data) => {
          return data[0].bookName === item[0].bookName;
        });
        valueFindIndex = index;
      }
      console.log(valueFindIndex);

      if (valueFindIndex < 0 || valueFindIndex === undefined) {
        const arr = state.value;
        arr.push(item);
      } else {
        const arr = state.value;
        arr[valueFindIndex][1].quantity = arr[valueFindIndex][1].quantity + 1;
        arr[valueFindIndex][1].totalPrice =
          arr[valueFindIndex][1].quantity * arr[valueFindIndex][0].bookPrice;
      }
      if (state.value) {
        let allTotalPrice = state.value.reduce(
          (ack, data) => ack + data[1].totalPrice,
          0
        );
        localStorage.setItem("AllTotalPrice", JSON.stringify(allTotalPrice));
      }

      localStorage.setItem("cart", JSON.stringify(state.value));
    },

    DeleteProductCart: (state, action) => {
      const localCartData = localStorage.getItem("cart");
      const dataCartParse = JSON.parse(localCartData);
      let cartData = state.value;
      let item = action.payload;
      cartData = dataCartParse;

      const newArr = cartData.filter(
        (data) => data[0].bookName !== item[0].bookName
      );
      localStorage.setItem("cart", JSON.stringify(newArr));

      window.location.reload();
    },
  },
});

const { reducer, actions } = ProductsSlice;

export const { AddToCart, DeleteProductCart } = actions;
export default reducer;
