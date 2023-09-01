import {
  Action,
  combineReducers,
  configureStore,
  PreloadedState,
  ThunkAction,
} from '@reduxjs/toolkit'
import rootReducer from '../reducers';

export const store = configureStore({
  reducer: rootReducer,
});


export const setupStore = (preloadedState ?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,

  })
}

export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export type RootState = ReturnType<typeof rootReducer>
// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;