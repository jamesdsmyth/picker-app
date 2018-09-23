import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootSaga from './sagas';
import getColorsReducer from './getColorsReducer';
import currentUserReducer from './currentUserReducer';
import signInReducer from './signInReducer';
import signUpReducer from './signUpReducer';
import saveColorReducer from './saveColorReducer';

// persistant storage for the store when closing and reopening an app
// blacklisting navigation as we do not need to persist this.
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['navigation']
}

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// combine all our reducers
const combinedReducers = combineReducers({
  getColorsReducer,
  currentUserReducer,
  signInReducer,
  signUpReducer,
  saveColorReducer
});

const persistedReducer = persistReducer(persistConfig, combinedReducers)

const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware, logger)
)

const persistor = persistStore(store)

sagaMiddleware.run(rootSaga);

const persistorStore = { store, persistor };

export default persistorStore;

