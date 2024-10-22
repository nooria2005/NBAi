import { configureStore } from "@reduxjs/toolkit";
import playerAuthReducer from "../features/playerAuthSlice"; // Renamed to reflect player authentication
import gameStatsReducer from "../features/gameStatsSlice"; // Renamed for game statistics
import {
  persistStore,
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
  key: "nba_root", // Changed to indicate it's for the NBA
  storage,
};

const persistedReducer = persistReducer(persistConfig, playerAuthReducer);

const store = configureStore({
  reducer: {
    playerAuth: persistedReducer, // Renamed to playerAuth
    gameStats: gameStatsReducer, // Renamed for game statistics
  },

  devTools: process.env.NODE_ENV !== "production", // Fixed typo from Node_ENV to NODE_ENV
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
