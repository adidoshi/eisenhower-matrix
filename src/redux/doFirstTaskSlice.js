import { createSlice } from "@reduxjs/toolkit";

const initial = localStorage.getItem("doFirstTasks")
  ? JSON.parse(localStorage.getItem("doFirstTasks"))
  : [];

export const doFirstTaskSlice = createSlice({
  name: "doFirstTasks",
  initialState: {
    doFirstTasks: initial,
  },
  reducers: {
    addDoFirstTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.doFirstTasks.push(newTask);

      localStorage.setItem("doFirstTasks", JSON.stringify(state.doFirstTasks));
    },

    deleteDoFirstTask: (state, action) => {
      state.doFirstTasks = [...state.doFirstTasks].filter(
        (task) => task.id !== action.payload.id
      );
      localStorage.setItem("doFirstTasks", JSON.stringify(state.doFirstTasks));
    },

    completedDoFirstTask: (state, action) => {
      const index = state.doFirstTasks.findIndex(
        (task) => task.id === action.payload.id
      );
      state.doFirstTasks[index].completed = action.payload.completed;
      localStorage.setItem("doFirstTasks", JSON.stringify(state.doFirstTasks));
    },
  },
});

export const { addDoFirstTask, deleteDoFirstTask, completedDoFirstTask } =
  doFirstTaskSlice.actions;

export default doFirstTaskSlice.reducer;
