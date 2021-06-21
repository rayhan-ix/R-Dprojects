import { createSlice } from '@reduxjs/toolkit';

interface OperationManagerState {}

const initialState: OperationManagerState = {};

export const operationManagerSlice = createSlice({
  name: 'operation-manager-module',
  initialState,
  reducers: {
    fao: () => true,
  },
  extraReducers: {},
});

export const { fao } = operationManagerSlice.actions;

export default operationManagerSlice.reducer;
