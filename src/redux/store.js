import languageReducer from './languages/languages-reducer';
import contentReducer from './content/content-reducers';
import submitReducer from './submit/submit-reducer';
// import storage from 'redux-persist/lib/storage';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// const contentPersistConfig = {
//   key: 'content',
//   storage,
//   blacklist: [],
// };

// const languagePersistConfig = {
//   key: 'language',
//   storage,
// };
// const submitPersistConfig = {
//   key: 'submit',
//   storage,
//   blacklist: ['submit'],
// };

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  //  logger,
];

const store = configureStore({
  reducer: {
    language: languageReducer,
    // language: persistReducer(languagePersistConfig, languageReducer),
    content: contentReducer,
    // content: persistReducer(contentPersistConfig, contentReducer),
    submit: submitReducer,
    // submit: persistReducer(submitPersistConfig, submitReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

// export default { store, persistor };
export default store;
