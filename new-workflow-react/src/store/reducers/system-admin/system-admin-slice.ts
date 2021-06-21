import { createSlice } from '@reduxjs/toolkit';

interface SystemAdminState {}

const initialState: SystemAdminState = {};

export const systemAdminSlice = createSlice({
  name: 'system-admin-module',
  initialState,
  reducers: {
    fao: () => true,
  },
  extraReducers: {},
});

export const { fao } = systemAdminSlice.actions;

export default systemAdminSlice.reducer;
