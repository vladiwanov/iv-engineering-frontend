import s from './Lighting.module.scss';
import { useEffect } from 'react';
import getID from 'tools/getID';
import images from '../../utils/db/images-db/lighting-images';
import LangContentSelector from '../../additional-components/LanguageContentSelector';
import { useSelector } from 'react-redux';
import { getLanguageMemoised } from 'redux/languages/languages-selector';
import Submit from 'tools/Submit';
import io from 'tools/io';
import arrayMaping from 'tools/arrayMaping';

export default function Lighting() {
  const currentLanguage = useSelector(getLanguageMemoised);
  const { lighting } = LangContentSelector(currentLanguage);
  const { slide1, slide2, slide3, slide4, slide5, slide6 } = images;

  // -------------------------IO---------------------------
  useEffect(() => {
    io();
    // io('contentItems', '-20%');
  }, []);
  // ------------------------------------------------------
  return (
    <>
      <section className={s.lighting}>
        <h2 className={s.heads}>{lighting.head}</h2>
        <p className={s.pain}>{lighting.pain}</p>
        <b className={s.subhead}>{lighting.subhead[0]}</b>

        <ul className={s}>
          <li className={s.contentItems} id="contentItems">
            <div className={s.itemText}>
              <div className={s.test}></div>
              <p className={`${s.subhead} ${s.subheadItems}`}>
                {lighting.solutions[0]}
              </p>
              {arrayMaping(lighting.context1, s.itemsList, s.text, s.textItem)}
              <Submit />
              <div className={s.test}></div>
            </div>

            <img src={slide1} className={s.images} alt="content" />
          </li>

          <li className={s.contentItems} id="contentItems">
            <img src={slide2} className={s.images} alt="system integration" />
            <div className={s.itemText}>
              <p className={`${s.subhead} ${s.subheadItems}`}>
                {lighting.solutions[1]}
              </p>
              {/* <p className={`${s.subheadItems}`}>{lighting.details[1]}</p> */}
              <ul className={s.lightingList}>
                {lighting.context2.map(text => (
                  <li className={s.text} key={getID()}>
                    <p className={s.textItem}>{text}</p>
                  </li>
                ))}
              </ul>
              <Submit />
            </div>
          </li>

          <li className={s.contentItems} id="contentItems">
            <div className={s.itemText}>
              <p className={`${s.subhead} ${s.subheadItems}`}>
                {lighting.solutions[2]}
              </p>
              <ul className={s.lightingList}>
                {lighting.context3.map(text => (
                  <li className={s.text} key={getID()}>
                    <p className={s.textItem}>{text}</p>
                  </li>
                ))}
              </ul>
              <Submit />
            </div>
            <img src={slide3} className={s.images} alt="clouds" />
          </li>
        </ul>

        <b className={`${s.subhead} ${s.worksTitle}`}>{lighting.subhead[1]}</b>
        <ul className={s.worksList}>
          <li className={s.worksItems}>
            <p className={s.worksContent}>{lighting.works[0]}</p>
            <img
              src={slide4}
              className={s.worksImages}
              alt="project developing"
            />
          </li>
          <li className={s.worksItems}>
            <p className={s.worksContent}>{`${lighting.works[1]}`}</p>

            <img
              src={slide5}
              className={s.worksImages}
              alt="project developing"
            />
          </li>
          <li className={s.worksItems}>
            <p className={s.worksContent}>{`${lighting.works[2]}`}</p>
            <img src={slide6} className={s.worksImages} alt="system services" />
          </li>
        </ul>
        {/* <Submit/> */}
      </section>
    </>
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
//   const targets = document.querySelectorAll('.lightItems');
//   // console.log('TARGET_ARRAY:::::', targets);

//   targets.forEach(target => observer.observe(target));
// }, []);

// ---------------------------------------------------------------
