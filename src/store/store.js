import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import ManagerSlice from "../redux-slice/ManagerSliceReducer";
import EmployeesSlice from "../redux-slice/EmployeesReducer";
import AdminSlice from "../redux-slice/AdminSliceReducer";
import { createLogger } from "redux-logger";
import  logger  from "redux-logger";
import { ManagerApi} from "../apis";

const loggerMiddleware = createLogger();
const rootReducer = combineReducers({
  manager: ManagerSlice,
  employees: EmployeesSlice,
  admin: AdminSlice,
  [ManagerApi.reducerPath]: ManagerApi.reducer,
});

export const store = configureStore(
  {
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(logger,ManagerApi.middleware),
  },
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);