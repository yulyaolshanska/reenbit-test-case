import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
  page: 1,
};
export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    changePage(state, action) {
      return {
        ...state,
        page: action.payload,
      };
    },
    changeFilter(state, action) {
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
});
const charactersReducer = charactersSlice.reducer;
const charactersActions = charactersSlice.actions;

export { charactersReducer, charactersActions };
