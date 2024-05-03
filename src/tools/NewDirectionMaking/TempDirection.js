import s from './ElectricDirection.module.scss';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getLanguageMemoised } from 'redux/languages/languages-selector';
import LangContentSelector from '../../additional-components/LanguageContentSelector';
import Submit from 'tools/Submit';
import images from 'utils/db/images-db/electric';
import io from 'tools/io';
import LanguageContent from 'additional-components/LanguageContent';
import arrayMaping from 'tools/arrayMaping';

export default function AlarmSystems() {
  const electric = LanguageContent('electric');
  // -------------------------IO---------------------------
  useEffect(() => {
    io();
  }, []);
  // ------------------------------------------------------
  return (
    <section className={s.electric}>
      <h2 className={s.heads}>{electric.head}</h2>
      {/* <p className={s.pain}>{electric.pain}</p> */}
      <b className={s.subhead}>{electric.subhead[0]}</b>
      <ul>
        {/* -----------Внутрішні роботи------------- */}
        <li className={s.contentItems} id="contentItems">
          <div className={s.itemText}>
            <h4 className={`${s.subhead} ${s.subheadItems}`}>
              {electric.internalWorkTitle}
            </h4>
            <p className={`${s.subheadItems}`}>
              {electric.internalWorkSubtitle}
            </p>
            {arrayMaping(
              electric.internalWork,
              s.itemsList,
              s.text,
              s.textItem,
            )}
            <Submit />
          </div>
          <img className={s.images} src={images[0]} alt="electric" />
        </li>

        {/* -----------Розподільчі щити------------- */}
        <li className={s.contentItems} id="contentItems">
          <img className={s.images} src={images[1]} alt="electric" />
          <div className={s.itemText}>
            <p className={`${s.subhead} ${s.subheadItems}`}>
              {electric.vruTitle}
            </p>
            {arrayMaping(electric.vru, s.itemsList, s.text, s.textItem)}
            <Submit />
          </div>
        </li>

        {/* -----------Блискавкозахист------------- */}
        <li className={s.contentItems} id="contentItems">
          <div className={s.itemText}>
            <h4 className={`${s.subhead} ${s.subheadItems}`}>
              {electric.thunderTitle}
            </h4>
            <p className={`${s.subheadItems}`}>{electric.thunderSubtitle}</p>
            {arrayMaping(electric.thunder, s.itemsList, s.text, s.textItem)}
            <Submit />
          </div>
          <img className={s.images} src={images[2]} alt="electric" />
        </li>

        {/* -------------------КТП------------------ */}

        <li className={s.contentItems} id="contentItems">
          <img className={s.images} src={images[3]} alt="ktp" />
          <div className={s.itemText}>
            <h4 className={`${s.subhead} ${s.subheadItems}`}>
              {electric.ktpTitle}
            </h4>
            <p className={`${s.subheadItems}`}>{electric.ktpSubtitle}</p>
            {arrayMaping(electric.ktp, s.itemsList, s.text, s.textItem)}
          </div>
        </li>

        {/* -----------Інтеграція з альтернативними джерелами------------- */}

        <li className={s.contentItems} id="contentItems">
          <div className={s.itemText}>
            <h4 className={`${s.subhead} ${s.subheadItems}`}>
              {electric.integrationTitle}
            </h4>
            {/* <p className={s.subhead}>{electric.integrationSubtitle}</p> */}
            {arrayMaping(electric.integration, s.itemsList, s.text, s.textItem)}
            <Submit />
          </div>
          <img className={s.images} src={images[4]} alt="electric" />
        </li>
      </ul>
      {/* <div className={s.works}>
        <b className={`${s.subhead} ${s.worksTitle}`}>{electric.subhead[1]}</b>
        <ul className={s.worksList}>
          <li className={s.worksItem}>
            <p className={s.worksContent}> {electric.works[0]} </p>
            <img className={s.worksImages} src={images[3]} alt="" />
          </li>
          <li className={s.worksItem}>
            <p className={s.worksContent}> {electric.works[1]} </p>
            <img className={s.worksImages} src={images[4]} alt="" />
          </li>
          <li className={s.worksItem}>
            <p className={s.worksContent}> {electric.works[2]} </p>
            <img className={s.worksImages} src={images[5]} alt="" />
          </li>
        </ul>
      </div> */}
    </section>
  );
}
