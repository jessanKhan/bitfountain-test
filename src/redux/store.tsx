import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger"
import rootreducer from "./reducers/rootreducer"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
const persistConfig = {
  key: "root",
  storage,
}
const reduxLogger = logger as any
const middleware = [thunk]
if (process.env.NODE_ENV !== "production") {
  middleware.push(reduxLogger)
}
const persistedReducer = persistReducer(persistConfig, rootreducer)

// const store = createStore(rootreducer, applyMiddleware(...middleware))

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware)
)

export const persistor = persistStore(store)
