import update from 'immutability-helper';

import { createSlice } from '@reduxjs/toolkit';

const initialState = { name: '', email: '' };

const slice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    fetchProfile: (state, action) => {
      return update(state, {
        name: {
          $set: 'Jacky',
        },
        email: {
          $set: 'Jacky@gmail.com',
        },
      });
    },
    clearProfile: () => initialState,
  },
});

export const { fetchProfile, clearProfile } = slice.actions;

export default slice.reducer;
