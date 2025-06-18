import { configureStore } from "@reduxjs/toolkit";
import BasicDetailsSlice from "./slices/basicDetailsSlice";

const store = configureStore({
  reducer: {
    basicDetails: BasicDetailsSlice,
  },
});

export default store;
