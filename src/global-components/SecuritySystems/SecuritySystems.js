import s from './SecuritySystems.module.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import { getDetails } from 'redux/content/content-selectors';
import { getLanguageMemoised } from 'redux/languages/languages-selector';
import securitySystemsImages from '../../utils/db/images-db/security-systems';
import LangContentSelector from '../../additional-components/LanguageContentSelector';
import Content from '../../additional-components/Content';
import Slider from '../../tools/Slider';
import Submit from 'tools/Submit';

export default function SecuritySystems({ state }) {
  const currentLanguage = useSelector(getLanguageMemoised);
  const details = useSelector(getDetails);
  const { securitysystems } = LangContentSelector(currentLanguage);

  return (
    <div className={s.securitysystem}>
      {!details && <Slider images={securitySystemsImages} />}
      <Content content={securitysystems} state={state} />
      <Submit />
    </div>
  );
}
