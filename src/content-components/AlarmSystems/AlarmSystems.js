import s from './AlarmSystems.module.scss';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getLanguageMemoised } from 'redux/languages/languages-selector';
import LangContentSelector from '../../additional-components/LanguageContentSelector';
import Submit from 'tools/Submit';
import images from 'utils/db/images-db/alarm';
import io from 'tools/io';
import arrayMaping from 'tools/arrayMaping';

export default function AlarmSystems() {
  const currentLanguage = useSelector(getLanguageMemoised);
  const { alarm } = LangContentSelector(currentLanguage);
  // -------------------------IO---------------------------
  useEffect(() => {
    io();
  }, []);
  // ------------------------------------------------------
  return (
    <section className={s.alarm}>
      <h2 className={s.heads}>{alarm.head}</h2>
      <p className={s.pain}>{alarm.pain}</p>
      <b className={s.subhead}>{alarm.subhead[0]}</b>
      <ul>
        <li className={s.contentItems} id="contentItems">
          <div className={s.itemText}>
            <p className={`${s.subhead} ${s.subheadItems}`}>
              {alarm.content[0]}
            </p>
            <p className={`${s.subheadItems}`}>{alarm.details[0]}</p>
            {arrayMaping(alarm.text, s.itemsList, s.text, s.textItem)}
            <Submit />
          </div>
          <img className={s.images} src={images[0]} alt="" />
        </li>
        <li className={s.contentItems} id="contentItems">
          <img className={s.images} src={images[1]} alt="" />
          <div className={s.itemText}>
            <p className={`${s.subhead} ${s.subheadItems}`}>
              {alarm.content[1]}
            </p>
            <p className={`${s.subheadItems}`}>{alarm.details[1]}</p>
            <Submit />
          </div>
        </li>
        <li className={s.contentItems} id="contentItems">
          <div className={s.itemText}>
            <p className={`${s.subhead} ${s.subheadItems}`}>
              {alarm.content[2]}
            </p>
            <p className={`${s.subheadItems}`}>{alarm.details[2]}</p>
            <Submit />
          </div>
          <img className={s.images} src={images[2]} alt="" />
        </li>
      </ul>
      {/* <div className={s.works}> */}
      <b className={`${s.subhead} ${s.worksTitle}`}>{alarm.subhead[1]}</b>
      <ul className={s.worksList}>
        <li className={s.worksItem}>
          <p className={s.worksContent}> {alarm.works[0]} </p>
          <img className={s.worksImages} src={images[3]} alt="" />
        </li>
        <li className={s.worksItem}>
          <p className={s.worksContent}> {alarm.works[1]} </p>
          <img className={s.worksImages} src={images[4]} alt="" />
        </li>
        <li className={s.worksItem}>
          <p className={s.worksContent}> {alarm.works[2]} </p>
          <img className={s.worksImages} src={images[5]} alt="" />
        </li>
      </ul>
      {/* </div> */}
    </section>
  );
}

// -------------------------IO---------------------------
// const cb = entries => {
//   // console.log('ENRTIES IN CB::::::', entries);
//   entries.forEach((entry, i) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add(`${s.active}`);
//       // observer.unobserve(entry);
//     }
//   });
// };

// const options = {
//   // rootMargin: '-200px',
//   // threshold: 0.3,
// };

// const observer = new IntersectionObserver(cb, options);

// useEffect(() => {
//   const targets = document.querySelectorAll('.alarmItems');
//   // console.log('TARGET_ARRAY:::::', targets);

//   targets.forEach(target => observer.observe(target));
// }, []);

// ---------------------------------------------------------------
