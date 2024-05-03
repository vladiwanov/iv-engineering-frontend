import React from 'react';
import { useSelector } from 'react-redux';
import { getLanguageMemoised } from 'redux/languages/languages-selector';
import { getDetails } from 'redux/content/content-selectors';
import LangContentSelector from '../../additional-components/LanguageContentSelector';
import Content from '../../additional-components/Content';
import Slider from '../../tools/Slider';
import s from './MetalGlas.module.scss';
import Submit from 'tools/Submit';

import glasImg from '../../utils/db/images-db/metal-glas';

export default function DataTransfer({ state }) {
  const currentLanguage = useSelector(getLanguageMemoised);
  const details = useSelector(getDetails);
  const { metalglas } = LangContentSelector(currentLanguage);

  return (
    <section className={s.datatransfer}>
      {!details && <Slider images={glasImg} />}
      <Content content={metalglas} state={state} />
      {/* <h2 className={s.title}>HI ITS METALGLAS DIRECTION</h2> */}
      <Submit />
    </section>
  );
}
