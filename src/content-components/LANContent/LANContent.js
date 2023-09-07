import s from './LANContent.module.scss';
import { useEffect } from 'react';
import images from '../../utils/db/images-db/lan-images';
import LangContentSelector from '../../additional-components/LanguageContentSelector';
import { useSelector } from 'react-redux';
import { getLanguageMemoised } from 'redux/languages/languages-selector';
import Submit from 'tools/Submit';
import io from 'tools/io';
import arrayMaping from 'tools/arrayMaping';
export default function LANContent() {
  const currentLanguage = useSelector(getLanguageMemoised);
  const { lan, lanDirections } = LangContentSelector(currentLanguage);

  // -------------------------IO---------------------------
  useEffect(() => {
    io();
  }, []);
  // ------------------------------------------------------

  return (
    <>
      <section className={s.lan}>
        <h2 className={s.heads}>{lan.head}</h2>
        <p className={s.pain} style={{ marginBottom: '30px' }}>
          {lan.pain}
        </p>
        {/* <b className={s.subhead}>{lan.subhead[0]}</b> */}
        <ul>
          <li className={s.contentItems} id="contentItems">
            <div className={s.itemText}>
              <p className={`${s.subhead} ${s.subheadItems} `}>
                {lan.solutions[0]}
              </p>
               <p className={s.pain}>{ lanDirections.lanText}</p>

              <ul className={s.contentLanList}>
                <li>
                  <p className={`${s.subheadItems}`}>
                    {lanDirections.contentLAN[0]}
                  </p>
                  {arrayMaping(
                    lanDirections.detailsDATA,
                    s.lanList,
                    s.text,
                    s.textItem,
                  )}

                  {/* <ul className={s.lanList}>
                    {lanDirections.detailsDATA.map((detail, i) => (
                      <li key={i} className={s.text}>
                        <p className={s.textItem}>{detail}</p>
                      </li>
                    ))}
                  </ul> */}
                </li>
                <li>
                  <p className={`${s.subheadItems}`}>
                    {lanDirections.contentLAN[1]}
                  </p>
                  {arrayMaping(
                    lanDirections.detailsSCS,
                    s.lanList,
                    s.text,
                    s.textItem,
                  )}

                  {/* <ul className={s.lanList}>
                    {lanDirections.detailsSCS.map((detail, i) => (
                      <li key={i} className={s.text}>
                        <p className={s.textItem}>{detail}</p>
                      </li>
                    ))}
                  </ul> */}
                </li>

                <li>
                  <p className={`${s.subheadItems}`}>
                    {lanDirections.contentLAN[2]}
                  </p>
                  {arrayMaping(
                    lanDirections.detailsLAN,
                    s.lanList,
                    s.text,
                    s.textItem,
                  )}
                  {/* <ul className={s.lanList}>
                    {lanDirections.detailsDATA.map((detail, i) => (
                      <li key={i} className={s.text}>
                        <p className={s.textItem}>{detail}</p>
                      </li>
                    ))}
                  </ul> */}
                </li>
                {/* <li>
                  <p className={`${s.subheadItems}`}>
                    {lanDirections.contentLAN[3]}
                  </p>
                  {arrayMaping(
                    lanDirections.lanIntegration,
                    s.lanList,
                    s.text,
                    s.textItem,
                  )}
                </li> */}
              </ul>

              <Submit />
            </div>
            {/* <img src={images[0]} className={s.images} alt="content" /> */}
          </li>

          <li className={s.contentItems} id="contentItems">
            <img
              src={images[1]}
              className={s.images}
              alt="system integration"
            />
            <div className={s.itemText}>
              <p className={`${s.subhead} ${s.subheadItems}`}>
                {lan.solutions[1]}
              </p>

              {arrayMaping(lan.text1, s.itemsList, s.text, s.textItem)}

              <Submit />
            </div>
          </li>

          <li className={s.contentItems} id="contentItems">
            <div className={s.itemText}>
              <p className={`${s.subhead} ${s.subheadItems}`}>
                {lan.solutions[2]}
              </p>
              {arrayMaping(lan.text2, s.itemsList, s.text, s.textItem)}
              <Submit />
            </div>
            <img src={images[2]} className={s.images} alt="clouds" />
          </li>
        </ul>

        <b className={`${s.subhead} ${s.worksTitle}`}>{lan.subhead[1]}</b>
        <ul className={s.worksList}>
          <li className={s.worksItems}>
            <p className={s.worksContent}>{lan.works[0]}</p>
            <img
              src={images[5]}
              className={s.worksImages}
              alt="project developing"
            />
          </li>
          <li className={s.worksItems}>
            <p className={s.worksContent}>{`${lan.works[1]}`}</p>

            <img
              src={images[3]}
              className={s.worksImages}
              alt="project developing"
            />
          </li>
          <li className={s.worksItems}>
            <p className={s.worksContent}>{`${lan.works[2]}`}</p>
            <img
              src={images[6]}
              className={s.worksImages}
              alt="system services"
            />
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
//   const targets = document.querySelectorAll('.lanItems');
//   // console.log('TARGET_ARRAY:::::', targets);

//   targets.forEach(target => observer.observe(target));
// }, []);

// ---------------------------------------------------------------
