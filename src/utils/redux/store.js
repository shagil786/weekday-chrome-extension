import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./jobReducer/jobReducer";

export const store = configureStore({
  reducer: {
    job: jobReducer,
  },
});
