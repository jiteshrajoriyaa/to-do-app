import { configureStore } from '@reduxjs/toolkit';
import menuSlice from './slices/menuSlice';
import tasksSlice from './slices/tasksSlice';
import authSlice from './slices/authSlice';
import themeSlice from './slices/themeSlice';


const store = configureStore({
  reducer: {
    menu: menuSlice,
    tasks: tasksSlice,
    auth: authSlice,
    theme: themeSlice,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
