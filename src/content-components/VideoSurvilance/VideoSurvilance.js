import s from './VideoSurvilance.module.scss';
import { useEffect } from 'react';
import LangContentSelector from '../../additional-components/LanguageContentSelector';
import { useSelector } from 'react-redux';
import images from '../../utils/db/images-db/cctv';
import { getLanguageMemoised } from 'redux/languages/languages-selector';
import Submit from '../../tools/Submit';
import io from 'tools/io';
import arrayMaping from 'tools/arrayMaping';
export default function VideoSurvilance() {
  const currentLanguage = useSelector(getLanguageMemoised);
  const { videosurvilance } = LangContentSelector(currentLanguage);
  // -------------------------IO---------------------------
  useEffect(() => {
    io();
  }, []);
  // ------------------------------------------------------
  return (
    <section className={s.cctv}>
      <h2 className={s.heads}>{videosurvilance.head}</h2>
      <pre className={s.pain}>{videosurvilance.pain}</pre>
      <b className={s.subhead}>{videosurvilance.subhead[0]}</b>

      <ul className={s}>
        <li className={s.contentItems} id="contentItems">
          <div className={s.itemText}>
            {/* <p className={s.text}>{videosurvilance.solutions[0]}</p> */}
            <p className={`${s.subhead} ${s.subheadItems}`}>
              {videosurvilance.solutions[0]}
            </p>
            {arrayMaping(
              videosurvilance.content[0],
              s.itemsList,
              s.text,
              s.textItem,
            )}
            {/* <p className={`${s.subheadItems}`}>{videosurvilance.content[0]}</p> */}
            <Submit />
          </div>
          <img className={s.images} src={images[0]} alt="vendors" />
        </li>

        <li className={s.contentItems} id="contentItems">
          <img className={s.images} src={images[1]} alt="vendors" />
          <div className={s.itemText}>
            <p className={`${s.subhead} ${s.subheadItems}`}>
              {videosurvilance.solutions[1]}
            </p>
            {arrayMaping(
              videosurvilance.content[1],
              s.itemsList,
              s.text,
              s.textItem,
            )}
            {/* <p className={`${s.subheadItems}`}>{videosurvilance.content[1]}</p> */}
            <Submit />
          </div>
        </li>
      </ul>

      <b className={s.subhead}>{videosurvilance.subhead[1]}</b>
      <ul className={s.worksList}>
        <li className={s.worksItems}>
          <p className={s.worksContent}>{`${videosurvilance.works[0]}`}</p>
          <img className={s.worksImages} src={images[7]} alt="project" />
        </li>
        <li className={s.worksItems}>
          <p
            className={s.worksContent}
          >{`${videosurvilance.works[1]}, ${videosurvilance.works[2]}`}</p>
          <img className={s.worksImages} src={images[8]} alt="project" />
        </li>
        <li className={s.worksItems}>
          <p
            className={s.worksContent}
          >{`${videosurvilance.works[3]},  ${videosurvilance.works[4]}`}</p>
          <img className={s.worksImages} src={images[9]} alt="project" />
        </li>
      </ul>
      <b className={s.subhead}>{videosurvilance.subhead[2]}</b>
      <div className={s.logo}>
        {/* <div className={s.logo}> */}
        <img className={s.imagesLogo} src={images[2]} alt="vendors" />
        <img className={s.imagesLogo} src={images[3]} alt="vendors" />
        <img className={s.imagesLogo} src={images[4]} alt="vendors" />
        <img className={s.imagesLogo} src={images[5]} alt="vendors" />
        <img className={s.imagesLogo} src={images[6]} alt="vendors" />
      </div>
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
//   const targets = document.querySelectorAll('.videoItems');
//   // const targets = document.querySelectorAll(`.${s.contentItems}`);
//   // console.log('TARGET_ARRAY:::::', targets);

//   targets.forEach(target => observer.observe(target));
// }, []);

// ---------------------------------------------------------------
