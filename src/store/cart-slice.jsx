import { createSlice } from "@reduxjs/toolkit";
import { uIActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {},
});
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uIActions.showNotification({
        status: "pending",
        title: "Sending",
        message: "Sending cart data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/550?api_key=8007da3ba2c47e0304c3a0e70c97a6b8",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };
    try {
      await sendRequest();

      dispatch(
        uIActions.showNotification({
          status: "succes",
          title: "Success",
          message: "Send cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        uIActions.showNotification({
          status: "error",
          title: "error",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
export const cartActions = cartSlice.actions;
export default cartSlice;
