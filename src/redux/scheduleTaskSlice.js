import { createSlice } from "@reduxjs/toolkit";

const initial = localStorage.getItem("scheduledTasks")
  ? JSON.parse(localStorage.getItem("scheduledTasks"))
  : [];

export const scheduleTaskSlice = createSlice({
  name: "tasks",
  initialState: {
    scheduledTasks: initial,
  },
  reducers: {
    addScheduleTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.scheduledTasks.push(newTask);

      localStorage.setItem(
        "scheduledTasks",
        JSON.stringify(state.scheduledTasks)
      );
    },

    deleteScheduleTask: (state, action) => {
      state.scheduledTasks = [...state.scheduledTasks].filter(
        (task) => task.id !== action.payload.id
      );
      localStorage.setItem(
        "scheduledTasks",
        JSON.stringify(state.scheduledTasks)
      );
    },

    completedScheduleTask: (state, action) => {
      const index = state.scheduledTasks.findIndex(
        (task) => task.id === action.payload.id
      );
      state.scheduledTasks[index].completed = action.payload.completed;
      localStorage.setItem(
        "scheduledTasks",
        JSON.stringify(state.scheduledTasks)
      );
    },
  },
});

export const { addScheduleTask, deleteScheduleTask, completedScheduleTask } =
  scheduleTaskSlice.actions;

export default scheduleTaskSlice.reducer;
