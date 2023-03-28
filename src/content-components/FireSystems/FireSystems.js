import s from './FireSystems.module.scss';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import LangContentSelector from '../../additional-components/LanguageContentSelector';
import Submit from 'tools/Submit';
import images from 'utils/db/images-db/fire-images';
import { getLanguageMemoised } from 'redux/languages/languages-selector';
import io from 'tools/io';
import arrayMaping from 'tools/arrayMaping';

export default function FireSystems() {
  const currentLanguage = useSelector(getLanguageMemoised);
  const { fire } = LangContentSelector(currentLanguage);

  // -------------------------IO---------------------------
  useEffect(() => {
    io();
  }, []);
  // ------------------------------------------------------

  return (
    <section className={s.fire}>
      <h2 className={s.heads}>{fire.head}</h2>
      <p className={s.pain}>{fire.pain}</p>
      <ul>
        <li className={s.contentItems} id="contentItems">
          <div className={s.itemText}>
            <p className={`${s.subhead} ${s.subheadItems}`}>
              {fire.solutions[0]}
            </p>
            <p className={`${s.subheadItems}`}>{fire.details[0]}</p>

            {arrayMaping(fire.texts1, s.fireList, s.text, s.textItem)}

            {/* <ul className={s.fireList}>
              {fire.texts1.map((text, i) => (
                <li key={i} className={s.text}>
                  <p className={s.textItem}>{text}</p>
                </li>
              ))}
            </ul> */}
            <Submit />
          </div>
          <img className={s.images} src={images[0]} alt="" />
        </li>
        <li className={s.contentItems} id="contentItems">
          {/* <img className={s.fireImages} src={images[1]} alt='' /> */}
          <img className={s.images} src={images[2]} alt="" />
          <div className={s.itemText}>
            <p className={`${s.subhead} ${s.subheadItems}`}>
              {fire.solutions[1]}
            </p>

            <div className={s.fireList}>
              {arrayMaping(fire.details[1], s.fireList, s.text, s.textItem)}
              {/* <p className={`${s.subheadItems}`}>{fire.details[1]}</p> */}
            </div>
            <Submit />
          </div>
        </li>
        <li className={s.contentItems} id="contentItems">
          <div className={s.itemText}>
            <p className={`${s.subhead} ${s.subheadItems}`}>
              {fire.solutions[2]}
            </p>
            <p className={`${s.subheadItems}`}>{fire.details[2]}</p>

            {arrayMaping(fire.texts3, s.fireList, s.text, s.textItem)}

            {/* <ul className={s.fireList}>
              {fire.texts3.map((text, i) => (
                <li key={i} className={s.text}>
                  <p className={s.textItem}>{text}</p>
                </li>
              ))}
            </ul> */}
            <Submit />
          </div>
          <img className={s.images} src={images[3]} alt="" />
        </li>
      </ul>
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
//   const targets = document.querySelectorAll('.fireItems');
//   // console.log('TARGET_ARRAY:::::', targets);

//   targets.forEach(target => observer.observe(target));
// }, []);

// ---------------------------------------------------------------
