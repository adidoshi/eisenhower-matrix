import { configureStore } from "@reduxjs/toolkit";
import doFirstTaskReducer from "./doFirstTaskSlice";
import scheduledTaskReducer from "./scheduleTaskSlice";

export default configureStore({
  reducer: {
    doFirstTasks: doFirstTaskReducer,
    scheduledTasks: scheduledTaskReducer,
  },
});
