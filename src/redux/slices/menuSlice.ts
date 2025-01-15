import { createSlice } from '@reduxjs/toolkit';

type MenuState = {
  isMenuOpen: boolean;
};

const initialState: MenuState = {
  isMenuOpen: true,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;
