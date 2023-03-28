import s from './AccessSystems.module.scss';
import { useEffect } from 'react';
import images from 'utils/db/images-db/access';
import LangContentSelector from '../../additional-components/LanguageContentSelector';
import { useSelector } from 'react-redux';
import { getLanguageMemoised } from 'redux/languages/languages-selector';
import Submit from 'tools/Submit';
import io from 'tools/io';
import arrayMaping from 'tools/arrayMaping';


export default function AccessSystems() {
  const currentLanguage = useSelector(getLanguageMemoised);
  const { access } = LangContentSelector(currentLanguage);
  // -------------------------IO---------------------------
  useEffect(() => {
    io();
  }, []);
  // ------------------------------------------------------
  return (
    <section className={s.access}>
      <h2 className={s.heads}>{access.head}</h2>
      <p className={s.pain}>{access.pain}</p>
      <b className={s.subhead}>{access.subhead[0]}</b>
      <ul>
        {/* -----------------Simple systems---------------------- */}

        <li className={s.contentItems} id="contentItems">
          <div className={s.itemText}>
            <p className={`${s.subhead} ${s.subheadItems}`}>
              {access.itemTitles[0]}
            </p>
            {arrayMaping(access.itemA, s.itemsList, s.text, s.textItem)}
            <Submit />
          </div>
          <img className={s.images} src={images[0]} alt="" />
          {/* <img className={`s.${className}`} src={images[0]} alt="" /> */}
        </li>

        {/* -----------------Domofom systems---------------------- */}

        <li className={s.contentItems} id="contentItems">
          <img className={s.images} src={images[1]} alt="" />
          <div className={s.itemText}>
            <p className={`${s.subhead} ${s.subheadItems}`}>
              {access.itemTitles[1]}
            </p>
            {arrayMaping(access.itemB, s.itemsList, s.text, s.textItem)}
            <Submit />
          </div>
        </li>

        {/* -----------------Multiterminals---------------------- */}

        <li className={s.contentItems} id="contentItems">
          <div className={s.itemText}>
            <p className={`${s.subhead} ${s.subheadItems}`}>
              {access.itemTitles[2]}
            </p>
            <p className={`${s.subheadItems}`}>{access.itemC}</p>
            {arrayMaping(access.itemCArray, s.itemsList, s.text, s.textItem)}
            <Submit />
          </div>
          <img className={s.images} src={images[2]} alt="" />
        </li>

        {/* -----------------Hotel systems---------------------- */}

        <li className={s.contentItems} id="contentItems">
          <img className={s.images} src={images[3]} alt="" />
          <div className={s.itemText}>
            <p className={`${s.subhead} ${s.subheadItems}`}>
              {access.itemTitles[3]}
            </p>
            <p className={s.subheadItems}>{access.itemD}</p>
            {arrayMaping(access.itemDArray, s.itemsList, s.text, s.textItem)}
            <Submit />
          </div>
        </li>

        {/* -----------------HiSec systems---------------------- */}

        <li className={s.contentItems} id="contentItems">
          <div className={s.itemText}>
            <p className={`${s.subhead} ${s.subheadItems}`}>
              {access.itemTitles[4]}
            </p>
            <ul className={s.accessList}>
              <li className={s.text}>
                <a
                    href={access.links.vein}
                  target="_blank"
                  rel="noreferrer"
                  className={s.link}
                >
                  <p className={s.textItem}n>{access.details2[0]}</p>
                </a>
              </li>
              <li className={s.text}>
                <p className={s.textItem}>{access.details2[1]}</p>
              </li>
            </ul>
            <Submit />
          </div>
          <img className={s.images} src={images[4]} alt="" />
        </li>

        {/* -----------------Platform systems---------------------- */}

        <li className={s.contentItems} id="contentItems">
          <img className={s.images} src={images[5]} alt="" />
          <div className={s}>
            <p className={`${s.subhead} ${s.subheadItems}`}>
              {access.itemTitles[5]}
            </p>
            {/* <p className={s.text}>{access.details[1]}</p> */}
            <Submit />
          </div>
        </li>
      </ul>

      {/* -------------------------------IN-------------------------------- */}

      <b className={`${s.subhead} ${s.worksTitle}`}>{access.subhead[1]}</b>
      <ul className={s.worksList}>
        <li className={s.worksItems}>
          <p className={s.worksContent}> {access.works[0]} </p>
          <img className={s.worksImages} src={images[6]} alt="" />
        </li>
        <li className={s.worksItems}>
          <p className={s.worksContent}> {access.works[1]} </p>
          <img className={s.worksImages} src={images[7]} alt="" />
        </li>
        <li className={s.worksItems}>
          <p className={s.worksContent}> {access.works[2]} </p>
          <img className={s.worksImages} src={images[8]} alt="" />
        </li>
      </ul>
    </section>
  );
}
