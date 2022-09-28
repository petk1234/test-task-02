import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./products/productsReducers";
import rootReducer2 from "./comments/comentsReducers";
const store = configureStore({
  reducer: { products: rootReducer, comments: rootReducer2 },
});
export default store;
