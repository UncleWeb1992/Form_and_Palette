import { configureStore, combineReducers } from "@reduxjs/toolkit";
import PaletteReducer from "./slices/palette.slice";

const rootReducer = combineReducers({ palette: PaletteReducer });

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
