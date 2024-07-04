import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Counter";
import AuthReducer from "./Auth";

const store = configureStore({
  reducer: { counter: counterReducer, auth: AuthReducer },
});

export default store;
