import { craeteSlicer, createSlice } from "@reduxjs/toolkit";
export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    allTodos: [
      {
        userId: 1,
        id: 1,
        title: "illo expedita consequatur quia in",
        completed: false,
      },
      {
        userId: 2,
        id: 2,
        title: "toi la tin",
        completed: false,
      },
    ],
  },

  reducer: {
    addTodo: (state, action) => {
      state.allTodos.push(action.payload);
    },
  },
});
