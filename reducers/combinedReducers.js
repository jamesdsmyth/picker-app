import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
// import saveColorReducer from './saveColorReducer';
import getColorsReducer from './getColorsReducer';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// combine all our reducers
const store = createStore(
  // saveColorReducer,
  getColorsReducer,
  applyMiddleware(sagaMiddleware)
)

// run the root saga
sagaMiddleware.run(rootSaga);

export default store;