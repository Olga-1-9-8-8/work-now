/* eslint-disable unicorn/prefer-spread */
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { rtkApiSlice } from "../api";

export const store = configureStore({
  reducer: {
    // users: usersReducer,
    [rtkApiSlice.reducerPath]: rtkApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
