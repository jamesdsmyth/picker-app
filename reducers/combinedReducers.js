import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
// import saveColorReducer from './saveColorReducer';
import getColorsReducer from './getColorsReducer';
import currentUserReducer from './currentUserReducer';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// combine all our reducers
const reducers = combineReducers({
  getColorsReducer,
  currentUserReducer
})

// create our store
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

// run the root saga
sagaMiddleware.run(rootSaga);

export default store;