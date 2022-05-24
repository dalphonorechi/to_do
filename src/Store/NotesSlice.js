import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../Data/Data";

export const notes = createSlice({
  name: "notes",
  initialState: {
    value: Todo,
  },
  reducers: {
    addToNotes: (state, action) => {
      state.value.push(action.payload);
    },
    removeFromNotes: (state, action) => {},
  },
});

export const { addToNotes } = notes.actions;

export default notes.reducer;
