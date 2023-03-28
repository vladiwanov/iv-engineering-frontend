import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as actions from './content-actions';

// const initialDetailsState = () => {
//   const defaultDetails = null;
//   if (JSON.parse(localStorage.getItem('details'))) {
//     return JSON.parse(localStorage.getItem('details'));
//   }
//   return defaultDetails;
// };

// const initialPrevPathState = () => {
//   const defaultPrevPath = '';
//   if (JSON.parse(localStorage.getItem('prevPath'))) {
//     return JSON.parse(localStorage.getItem('prevPath'));
//   }
//   return defaultPrevPath;
// };

const initialDetailsState = () => {
  const defaultDetails = null;
  if (JSON.parse(sessionStorage.getItem('details'))) {
    return JSON.parse(sessionStorage.getItem('details'));
  }
  return defaultDetails;
};

const initialPrevPathState = () => {
  const defaultPrevPath = '/';

  if (JSON.parse(sessionStorage.getItem('prevPath'))) {
    return JSON.parse(sessionStorage.getItem('prevPath'));
  }
  return defaultPrevPath;
};

const reducerDirections = createReducer('', {
  [actions.directionAction]: (_, { payload }) => payload,
});

const reducerDetails = createReducer(initialDetailsState, {
  [actions.detailsAction]: (_, { payload }) => payload,
});

const savedPrevPath = createReducer(initialPrevPathState, {
  [actions.savedPrevPath]: (_, { payload }) => {
    sessionStorage.setItem('prevPath', JSON.stringify(payload));
    return payload;
  },
});

// const currentPath = createReducer('', {
//   [actions.setCurrentPath]: (_, { payload }) => payload,
// });

export default combineReducers({
  directions: reducerDirections,
  details: reducerDetails,
  savedPrevPath,
  // currentPath,
});
