import { configureStore } from "@reduxjs/toolkit";
import { todosSlice } from "../pages/TodoSlice";
import { LoginSlice } from "../pages/Login/LoginSlice";

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
    auth: LoginSlice.reducer,
  },
});

export default store;
