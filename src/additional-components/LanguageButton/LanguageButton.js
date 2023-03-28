import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLanguageMemoised } from 'redux/languages/languages-selector';
import s from './LanguageButton.module.scss';
import { currentLanguage as cL } from 'redux/languages/languages-action';

export default function LanguageButton() {
  const dispatch = useDispatch();
  const setCurrentLanguage = value => dispatch(cL(value));
  const currentLanguage = useSelector(getLanguageMemoised);

  return (
    <div className={s.lang}>
      <button
        type="button"
        className={s.selectButton}
        onClick={e => setCurrentLanguage(e.target.outerText)}
      >
        {currentLanguage === 'UA' ? 'EN' : 'UA'}
      </button>
    </div>
  );
}

// {/* <button
//         type="button"
//         className={s.selectButton}
//         onClick={e => setCurrentLanguage(e.target.outerText)}
//         disabled={currentLanguage === 'UA'}
//       >
//         UA
//       </button>
//       <button
//         type="button"
//         className={s.selectButton}
//         onClick={e => setCurrentLanguage(e.target.outerText)}
//         disabled={currentLanguage === 'EN'}
//       >
//         EN
//       </button>
//       <button
//         type="button"
//         className={s.selectButton}
//         onClick={e => setCurrentLanguage(e.target.outerText)}
//         disabled={currentLanguage === 'RU'}
//       >
//         RU
//       </button> */}
