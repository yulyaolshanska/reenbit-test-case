import { persistReducer } from "redux-persist";
import { authSlice } from "./authSlice";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth",
  storage,
};

export const persistedReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);
