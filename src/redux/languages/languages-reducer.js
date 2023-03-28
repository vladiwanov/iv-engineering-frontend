import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as actions from './languages-action';

// const initialState = () => {
//   const defaultLanguage = 'EN';

//   if (JSON.parse(localStorage.getItem('currentLanguage'))) {
//     return JSON.parse(localStorage.getItem('currentLanguage'));
//   } else {
//     localStorage.setItem('currentLanguage', JSON.stringify(defaultLanguage));
//     return defaultLanguage;
//   }
// };

// const language = createReducer(initialState(), {
//   // const language = createReducer('RU', {
//   [actions.currentLanguage]: (_, { payload }) => {
//     localStorage.setItem('currentLanguage', JSON.stringify(payload));
//     return payload;
//   },
// });

// export default combineReducers({
//   language,
// });
//

const initialState = () => {
  const defaultLanguage = 'UA';

  if (JSON.parse(sessionStorage.getItem('currentLanguage'))) {
    return JSON.parse(sessionStorage.getItem('currentLanguage'));
  } else {
    sessionStorage.setItem('currentLanguage', JSON.stringify(defaultLanguage));
    return defaultLanguage;
  }
};

const language = createReducer(initialState(), {
  // const language = createReducer('RU', {
  [actions.currentLanguage]: (_, { payload }) => {
    sessionStorage.setItem('currentLanguage', JSON.stringify(payload));
    return payload;
  },
});

export default combineReducers({
  language,
});
