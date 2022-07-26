import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import rootReducer from "./reducers";

const makeConfiguredStore = (reducer) => {
  return configureStore({
    reducer,
    devTools: process.env.NEXT_PUBLIC_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });
};

const makeStore = () => {
  const { persistStore, persistReducer } = require("redux-persist");
  const storage = require("redux-persist/lib/storage").default;

  const persistConfig = {
    key: "app_persist",
    storage,
    stateReconciler: hardSet,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = makeConfiguredStore(persistedReducer);

  store.__persistor = persistStore(store); // Nasty hack

  return store;
};

export const wrapper = createWrapper(makeStore);
