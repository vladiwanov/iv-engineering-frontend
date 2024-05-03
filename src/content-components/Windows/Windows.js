import s from './Windows.module.scss';
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import LangContentSelector from '../../additional-components/LanguageContentSelector';
import Submit from 'tools/Submit';
import images from 'utils/db/images-db/fire-images';
import { getLanguageMemoised } from 'redux/languages/languages-selector';
import io from 'tools/io';
import arrayMaping from 'tools/arrayMaping';

export default function WindowsSystems() {
  const currentLanguage = useSelector(getLanguageMemoised);
  const { windows } = LangContentSelector(currentLanguage);

  return (
    <section className={s.windows}>
      <h2 className={s.heads}>{windows.head}</h2>
      <p className={s.pain}>{windows.pain}</p>
      <ul>
        <li className={s.contentItems} id="contentItems">
          <div className={s.itemText}>
            <p className={`${s.subhead} ${s.subheadItems}`}>
              {windows.vruTitle}
            </p>
            <p className={`${s.subheadItems}`}>{windows.ktp[0]}</p>
            {arrayMaping(windows.thunder, s.fireList, s.text, s.textItem)}
            <Submit />
          </div>
          <img className={s.images} src={images[0]} alt="" />
        </li>
        <li className={s.contentItems} id="contentItems">
          <img className={s.images} src={images[2]} alt="" />
          <div className={s.itemText}>
            <p className={`${s.subhead} ${s.subheadItems}`}>
              {windows.ktpSubtitle}
            </p>
            <div className={s.fireList}>
              {arrayMaping(
                windows.internalWork,
                s.fireList,
                s.text,
                s.textItem,
              )}
            </div>
            <Submit />
          </div>
        </li>
        <li className={s.contentItems} id="contentItems">
          <div className={s.itemText}>
            <p className={`${s.subhead} ${s.subheadItems}`}>
              {windows.integrationTitle}
            </p>
            <p className={`${s.subheadItems}`}>{windows.ktp[2]}</p>
            {arrayMaping(windows.integration, s.fireList, s.text, s.textItem)}
            <Submit />
          </div>
          <img className={s.images} src={images[3]} alt="" />
        </li>
      </ul>
    </section>
  );
}
