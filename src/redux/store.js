import { configureStore } from "@reduxjs/toolkit";
import { todosSlice } from "../pages/TodoSlice";

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});

export default store;
