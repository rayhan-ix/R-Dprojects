import { createSlice } from '@reduxjs/toolkit';

interface UserState {}

const initialState: UserState = {};

export const userSlice = createSlice({
  name: 'user-module',
  initialState,
  reducers: {
    fao: () => true,
  },
  extraReducers: {},
});

export const { fao } = userSlice.actions;

export default userSlice.reducer;
