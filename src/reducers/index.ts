import {
  Action,
  combineReducers,
  configureStore,
  PreloadedState,
  ThunkAction,
} from '@reduxjs/toolkit'

import { authSlice } from '../features/auth/authSlice';
// Importe seus reducers individuais aqui

const rootReducer = combineReducers({
  auth: authSlice.reducer
  
});

export default rootReducer;