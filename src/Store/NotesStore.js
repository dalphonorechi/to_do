import { configureStore } from "@reduxjs/toolkit";
import notes from "./NotesSlice";

export default configureStore({
  reducer: {
    notes: notes,
  },
});
