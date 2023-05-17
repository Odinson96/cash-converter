import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import loginReducer from "./redusers/loginSlice";

const rootReducer = combineReducers({
  loginReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
