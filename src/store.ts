import { AsyncStorage } from 'react-native';
import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import ExpoFileSystemStorage from "redux-persist-expo-filesystem"

import { reducer as dataReducer } from './data/reducer';

const rootReducer = combineReducers({
  data: dataReducer,
});

const persistConfig = {
  key: 'root',
  storage: ExpoFileSystemStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

let persistor = persistStore(store);

export {
  store,
  persistor,
};
