import { persistReducer } from "redux-persist";
import { charactersSlice } from "./charactersSlice";
import storage from "redux-persist/lib/storage";

const charactersPersistConfig = {
  key: "characters",
  storage,
};

export const persistedReducer = persistReducer(
  charactersPersistConfig,
  charactersSlice.reducer
);
