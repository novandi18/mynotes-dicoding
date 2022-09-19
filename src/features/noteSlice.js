import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "notes",
  initialState: {
    search: "",
  },
  reducers: {
    searchNote: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { searchNote } = noteSlice.actions;
export default noteSlice.reducer;
