import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { addDays } from "date-fns";
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    tasks: [
      {
        id: uuidv4(),
        body: "example",
        isDone: false,
        deadLine: addDays(new Date(), 1),
      },
    ],
    mode: "all",
    amount: 5,
  },
  reducers: {
    createTask(state, action) {
      const { body, deadLine } = action.payload;
      const newTask = {
        id: uuidv4(),
        body,
        isDone: false,
        deadLine,
      };
      state.tasks.pushO(newTask);
    },
    deleteTask(state, action) {
      const { id } = action.payload;
      state.tasks = state.tasks.filter((task) => id !== task.id);
    },
    isDOneTask(state, action) {
      const { id } = action.payload;
      state.tasks = state.tasks.map((task) =>
        id === task.id ? { ...task, isDone: !task.isDone } : task
      );
    },
    steMode(state, action) {
      const { mode } = action.payload;
      state.mode = mode;
    },
    steAmount(state, action) {
      const { amount } = action.payload;
      state.amount = amount;
    },
  },
});

export const { createTask, deleteTask, isDOneTask, steMode } =
  todoSlice.actions;
export default todoSlice.reducer;
