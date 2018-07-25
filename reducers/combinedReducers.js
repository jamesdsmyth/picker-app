import { createStore, combineReducers, applyMiddleware } from 'redux';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
// import saveColorReducer from './saveColorReducer';
import getColorsReducer from './getColorsReducer';
import currentUserReducer from './currentUserReducer';

// persistant storage for the store when closing and reopening an app
const persistConfig = {
  key: 'root',
  storage,
}

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// combine all our reducers
const combinedReducers = combineReducers({
  getColorsReducer,
  currentUserReducer
});

const persistedReducer = persistReducer(persistConfig, combinedReducers)

const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware)
)

const persistor = persistStore(store)

sagaMiddleware.run(rootSaga);

const persistorStore = { store, persistor };

export default persistorStore;

