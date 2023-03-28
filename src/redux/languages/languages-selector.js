import { createSelector } from '@reduxjs/toolkit';
const getLanguage = state => {
  return state.language.language;
};

const getLanguageMemoised = createSelector([getLanguage], rez => rez); // принцип мееоизации (здесь не нужен , просто показано как сделать)



export { getLanguageMemoised};
