import s from './SubmitForm.module.scss';
import { useSelector } from 'react-redux';

import { getLanguageMemoised } from 'redux/languages/languages-selector';
import LangContentSelector from '../../../../additional-components/LanguageContentSelector';

import React from 'react';

export default function SubmitForm({ licence, email, statusLicenceChange }) {
  const currentLanguage = useSelector(getLanguageMemoised);
  const { submitForm } = LangContentSelector(currentLanguage);

  return (
    <div>
      <label className={s.checkboxContainer}>
        <input
          // className={s.checkbox}
          className={s.check}
          type="checkbox"
          name="licence"
          checked={licence}
          onChange={statusLicenceChange}
        />
        <span className={s.licence}>{submitForm.licence}</span>
      </label>
      <button className={s.button} type="submit" disabled={!licence || !email}>
        {submitForm.submit}
      </button>
    </div>
  );
}
