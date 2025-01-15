import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Task = {
  id: number;
  title: string;
  priority: string;
  isTaskDone: boolean;
};

type TasksState = {
  tasks: Task[];
};

const initialState: TasksState = {
  tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Omit<Task, 'id'>>) => {
      const newTask = { ...action.payload, id: Date.now(), isTaskDone: false };
      state.tasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    toggleTaskDone: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) {
        task.isTaskDone = !task.isTaskDone;
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
      }
    },
    setPriority: (state, action: PayloadAction<{ id: number; priority: string }>) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        task.priority = action.payload.priority;
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
      }
    },
  },
});

export const { addTask, toggleTaskDone, setPriority } = tasksSlice.actions;
export default tasksSlice.reducer;
