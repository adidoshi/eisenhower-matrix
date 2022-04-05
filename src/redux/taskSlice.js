import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
  },
  reducers: {},
});

export default taskSlice.reducer;
