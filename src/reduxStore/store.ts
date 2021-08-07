import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createRootReducer from "../modulesSlice";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import { fetchBannerMessage } from "../modulesAPI/bannerMessgeAPI";

export const ROUTE_LOCATION_DID_UPDATE = "store/ROUTE_LOCATION_DID_UPDATE";

export const history = createBrowserHistory();

const initialState = {
  // router: routerReducer
};

const logger = (store: any) => (next: any) => (action: any) => {
  if (window) {
    if (action) {
      const result = next(action);
      return result;
    } else {
      return next();
    }
  }
};

const initialDataMiddleware = (store: any) => (next: any) => (action: any) => {
  let path = window.location.pathname;
  // const user = store.getState().authReducer.user;
  // const pages = path.split("/");

  if (action) {
    switch (action.type) {
      case "auth/SET_LOGIN_SUCCESS":
        break;
      default:
        break;
    }
  }
  next(action);
  if (action) {
    switch (action.type) {
      case "@@router/LOCATION_CHANGE":
        path = action.payload.location.pathname;
        switch (true) {
          case path === "/":
            store.dispatch(fetchBannerMessage());
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  }
};

export const store = configureStore({
  reducer: createRootReducer(history),
  devTools: true,
  middleware: [
    logger,
    initialDataMiddleware,
    routerMiddleware(history),
    ...getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
      devTools: true,
    }),
  ],
  preloadedState: initialState,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

