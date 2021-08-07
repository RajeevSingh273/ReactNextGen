import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import bannerMessageSlice from "./bannerMessageSlice";

const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    bannerMessageReducer: bannerMessageSlice,
  });

export default createRootReducer;
