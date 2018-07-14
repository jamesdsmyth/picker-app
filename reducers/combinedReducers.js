import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas";
import saveColorReducer from './saveColorReducer';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// combine all our reducers
let store = createStore(
  saveColorReducer,
  applyMiddleware(sagaMiddleware)
)

// run the root saga
sagaMiddleware.run(rootSaga);

export default store;