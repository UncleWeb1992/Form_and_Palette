import { IPalette } from "./../../models/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface PaletteProps {
  paletteList: IPalette[];
}

const initialState: PaletteProps = {
  paletteList: [],
};

const PaletteSlise = createSlice({
  name: "palette",
  initialState,
  reducers: {
    addColor: (state, action: PayloadAction<IPalette>) => {
      state.paletteList.push(action.payload);
    },
    deleteColor: (state, action: PayloadAction<string>) => {
      state.paletteList = state.paletteList.filter(
        (p) => p.id !== action.payload
      );
    },
  },
});

const { reducer: PaletteReducer, actions } = PaletteSlise;
export const { addColor, deleteColor } = actions;

export const getPaletteState = () => (state: RootState) => state.palette;

export default PaletteReducer;
