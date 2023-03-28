import React from 'react';
import { useSelector } from 'react-redux';
import { getLanguageMemoised } from 'redux/languages/languages-selector';
import s from './SubmitButton.module.scss';
import LangContentSelector from 'additional-components/LanguageContentSelector';

export default function SubmitButton({ onToggle }) {
  const currentLanguage = useSelector(getLanguageMemoised);
  const { submit } = LangContentSelector(currentLanguage);
  const onHanldeClickButton = e => {
    e.preventDefault();
    onToggle();
  };
  return (
    <>
      {/* <button
        type="button"
        onClick={onHanldeClickButton}
        className={` ${s.submitButton}`}
      >
        <p>{submit.text}</p>
      </button> */}
    </>
  );
}
