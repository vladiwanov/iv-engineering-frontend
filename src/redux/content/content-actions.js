import { createAction } from '@reduxjs/toolkit';

export const detailsAction = createAction('content/ShowDetails');
export const directionAction = createAction('content/getDirection');
export const savedPrevPath = createAction('content/savedPrevPath');
export const setCurrentPath = createAction('content/currentPath');
