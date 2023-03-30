import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart-slice";
import uISlice from "./ui-slice";

const store = configureStore({
    reducer: {cart: cartSlice.reducer, ui: uISlice.reducer}
});
export default store;