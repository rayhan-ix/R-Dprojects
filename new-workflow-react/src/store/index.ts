import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/users/user-slice';
import systemAdminReducer from './reducers/system-admin/system-admin-slice';
import operationMangerReducer from './reducers/operation-manager/operation-manager-slice';

export const store = configureStore({
  reducer: {
    users: userReducer,
    systemAdmin: systemAdminReducer,
    operationManager: operationMangerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
