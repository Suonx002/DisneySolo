import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import videoReducer from './videoReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['video']
};

const rootReducer = combineReducers({
  video: videoReducer
});

export default persistReducer(persistConfig, rootReducer);
