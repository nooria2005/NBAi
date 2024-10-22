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