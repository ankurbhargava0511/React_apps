import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";


const myLoggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("type", action.type);
  console.log("payload", action.payload);
  console.log("cur sate", store.getState());

  next(action);
  console.log("new sate", store.getState());
};


const persistConfig={
  key:'root',
  storage,
  blacklist:['user'],
  whitelist:['categories']

}

const persistedReducer= persistReducer(persistConfig, rootReducer)

const middleWares = [myLoggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

//export const appstore = createStore(rootReducer, undefined, composedEnhancers);
export const appstore = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor= persistStore(appstore)
