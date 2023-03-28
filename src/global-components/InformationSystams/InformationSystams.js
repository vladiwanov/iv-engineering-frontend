import React from 'react';
import { useSelector } from 'react-redux';
import { getLanguageMemoised } from 'redux/languages/languages-selector';
import { getDetails } from 'redux/content/content-selectors';
import dataImg from '../../utils/db/images-db/data-transfer';
import LangContentSelector from '../../additional-components/LanguageContentSelector';
import Content from '../../additional-components/Content';
import Slider from '../../tools/Slider';
import s from './InformationSystams.module.scss';
import Submit from 'tools/Submit';

export default function DataTransfer({ state }) {
  const currentLanguage = useSelector(getLanguageMemoised);
  const details = useSelector(getDetails);
  const { infornationSystems } = LangContentSelector(currentLanguage);

  return (
    <section className={s.datatransfer}>
      {!details && <Slider images={dataImg} />}
      <Content content={infornationSystems} state={state} />
      <Submit />
    </section>
  );
}
