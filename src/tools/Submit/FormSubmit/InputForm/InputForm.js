import React from 'react';
import { useSelector } from 'react-redux';
import s from './InputForm.module.scss';
import sprite from 'utils/db/img/sprite.svg';
import { getLanguageMemoised } from 'redux/languages/languages-selector';
import LangContentSelector from '../../../../additional-components/LanguageContentSelector';
import getID from 'tools/getID';

export default function InputForm({ name, email, tel, handleChange }) {
  const currentLanguage = useSelector(getLanguageMemoised);
  const { submitForm } = LangContentSelector(currentLanguage);
  // const telInputId = shortid.generate();
  const nameInputId = getID();
  // const commentsInputId = shortid.generate();
  const emailInputId = getID();

  return (
    <div>
      <ul>
        {/* ----------------NAME---------------- */}

        <li className={s.formField}>
          <input
            className={s.formInput}
            name="name"
            id={nameInputId}
            type="text"
            value={name}
            maxlength="20"
            onChange={handleChange}
            // placeholder="name"
          />
          <label className={s.inputLabel} htmlFor={nameInputId}>
            {submitForm.name}
          </label>
          <svg className={s.inputIcon}>
            <use href={sprite + '#person'} />
          </svg>
        </li>

        {/* ----------------TEL------------------ */}

        {/* <li className={s.formField}>
          <input
            className={s.formInput}
            name="tel"
            id={telInputId}
            type="tel"
            value={tel}
            onChange={handleChange}
            placeholder=" "
          />
          <label className={s.inputLabel} htmlFor={telInputId}>
            Тел
          </label>
          <svg className={s.inputIcon}>
            <use href={sprite + '#phone'} />
          </svg>
        </li> */}

        {/* ----------------EMAIL------------------ */}

        <li className={s.formField}>
          <input
            className={s.formInput}
            name="email"
            id={emailInputId}
            type="email"
            value={email}
            onChange={handleChange}
            // placeholder="somebody@email.com"
          />
          <label className={s.inputLabel} htmlFor={emailInputId}>
            {submitForm.email}
          </label>
          <svg className={s.inputIcon}>
            <use href={sprite + '#email'} />
          </svg>
        </li>
        {/* --------------------------------------- */}
      </ul>
    </div>
  );
}
