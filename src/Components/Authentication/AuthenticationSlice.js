import { createSlice } from "@reduxjs/toolkit";
export const AuthenticationSlice = createSlice({
  name: "counter",
  initialState: {
    value: [],
  },
  reducers: {
    RegisterAction: (state, action) => {
      let registerParse = JSON.parse(localStorage.getItem("register"));

      if (!registerParse) {
        localStorage.setItem("register", JSON.stringify([action.payload]));
      } else {
        state.value = registerParse;
        state.value.push(action.payload);
        localStorage.setItem("register", JSON.stringify(state.value));
      }

      setTimeout(() => {
        window.location.href = "/account/login";
      }, 1000);
    },

    LoginAction: (state, action) => {
      let data = action.payload;
      let registerParse = JSON.parse(localStorage.getItem("register"));
      if (registerParse) {
        const afterFilter = registerParse.filter((item) => {
          return item.Email === data.Email && item.Password === data.Password;
        });

        if (afterFilter.length) {
          localStorage.setItem("UserLoginData", JSON.stringify(afterFilter));
          alert("Đăng nhập thành công");

          setTimeout(() => {
            window.location.href = "/";
          }, 1000);
        } else {
          alert("Đăng nhập thất bại");
        }
      }
    },
  },
});

const { reducer, actions } = AuthenticationSlice;

export const { RegisterAction, LoginAction } = actions;
export default reducer;
