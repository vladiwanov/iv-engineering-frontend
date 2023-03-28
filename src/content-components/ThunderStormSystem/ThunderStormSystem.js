import s from './ThunderStormSystem.module.scss';
import { useEffect } from 'react';
import images from '../../utils/db/images-db/thunder';
import LangContentSelector from '../../additional-components/LanguageContentSelector';
import { useSelector } from 'react-redux';
import { getLanguageMemoised } from 'redux/languages/languages-selector';
import Submit from 'tools/Submit';
import io from 'tools/io';
import arrayMaping from 'tools/arrayMaping';

export default function ThunderStormSystem() {
  const currentLanguage = useSelector(getLanguageMemoised);
  const { thunder } = LangContentSelector(currentLanguage);
  // -------------------------IO---------------------------
  useEffect(() => {
    io();
  }, []);
  // ------------------------------------------------------
  return (
    <section className={s.thunder}>
      <h2 className={s.heads}>{thunder.head}</h2>
      <b className={s.subhead}>{thunder.subhead}</b>
      <p className={s.pain}>{thunder.pain}</p>

      <ul className={s}>
        <li className={s.contentItems} id="contentItems">
          <div className={s.itemText}>
            <div className={s.test}></div>
            <h3 className={`${s.subhead} ${s.subheadItems}`}>
              {thunder.itemTitle[0]}
            </h3>
            {arrayMaping(thunder.solutions, s.itemsList, s.text, s.textItem)}
            <div className={s.test}></div>
            <Submit />
          </div>
          <img
            className={s.images}
            src={images[0]}
            alt="thunderstorm defender"
          />
        </li>
        <li className={s.contentItems} id="contentItems">
          <img
            className={s.images}
            src={images[1]}
            alt="active thunder receiver"
          />
          <div className={s.itemText}>
            <h3 className={`${s.subhead} ${s.subheadItems}`}>
              {thunder.itemTitle[1]}
            </h3>
            {/* <p className={s.text}>{thunder.new}</p> */}
            <p className={s.subheadItems}>{thunder.new}</p>
            <Submit />
          </div>
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
//   const targets = document.querySelectorAll('.thunderItems');
//   // console.log('TARGET_ARRAY:::::', targets);

//   targets.forEach(target => observer.observe(target));
// }, []);

// ---------------------------------------------------------------
