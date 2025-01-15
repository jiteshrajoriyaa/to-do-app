import { createSlice } from '@reduxjs/toolkit';

type ThemeState = {
  isDarkMode: boolean;
};

const initialState: ThemeState = {
  isDarkMode: false, 
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem('isDarkMode', JSON.stringify(state.isDarkMode));
    },
    initializeTheme: (state) => {
      const savedTheme = localStorage.getItem('isDarkMode');
      if (savedTheme !== null) {
        state.isDarkMode = JSON.parse(savedTheme);
      }
    },
  },
});

export const { toggleTheme, initializeTheme } = themeSlice.actions;
export default themeSlice.reducer;
