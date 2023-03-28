import React from 'react';
import { useSelector } from 'react-redux';
import { getLanguageMemoised } from 'redux/languages/languages-selector';
import { getDetails } from 'redux/content/content-selectors';
import engineeringImages from '../../utils/db/images-db/engineering-systems';
import LangContentSelector from '../../additional-components/LanguageContentSelector';
import Content from '../../additional-components/Content';
import Slider from '../../tools/Slider';
import Submit from 'tools/Submit';

import s from './AlternativeEnergy.module.scss';

export default function Engineering({ state }) {
  const currentLanguage = useSelector(getLanguageMemoised);
  const details = useSelector(getDetails);
  const { alternativeEnergy } = LangContentSelector(currentLanguage);
  return (
    <div className={s.engineeringsystems}>
      {!details && <Slider images={engineeringImages} />}
      <Content content={alternativeEnergy} state={state} />
      <Submit />
    </div>
  );
}
