import { configureStore } from "@reduxjs/toolkit";
// api
import { authApi } from "./actions/authApi";
//slice
import speakerSlice from "./slice/speakerSlice";
import authSlice from "./slice/authSlice";
// redux pesist
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "user",
  storage,
};

const persistedUser = persistReducer(persistConfig, authSlice);

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,

    stateUser: persistedUser,
    stateSpeakers: speakerSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
