import { useEffect } from 'react';
import s from './AboutPageView.module.scss';
import { getLanguageMemoised } from 'redux/languages/languages-selector';
import LanguageButton from '../../additional-components/LanguageButton/LanguageButton';
import AppBar from '../../components/AppBar';
import Submit from 'tools/Submit';
import LanguageContentSelector from 'additional-components/LanguageContentSelector/LanguageContentSelector';
import Footer from 'components/Footer';
import { useSelector } from 'react-redux';
import getID from 'tools/getID';
import CloseButton from 'tools/CloseButton';
import io from 'tools/io';
import arrayMaping from 'tools/arrayMaping';

function AboutPageView() {
  const currentLanguage = useSelector(getLanguageMemoised);
  const { about } = LanguageContentSelector(currentLanguage);

  useEffect(() => {
    io('about', '0px', s.contentAnimation);
  }, []);

  return (
    <>
      <LanguageButton />
      <AppBar />
      <CloseButton />
      <section className={s}>
        <div className={`${s.about} ${s.aboutContent}`} id="about">
          {/* <div className={`${s.about}`}> */}
          <div>
            <div>
              <h2 className={s.heads}>{about.head}</h2>
              <p className={`${s.subheadItems} ${s.aboutContent}`}>
                {about.part1}
              </p>
              <ul
                className={`${s.subheadItems} ${s.aboutContent} ${s.aboutDirectionList}`}
              >
                {about.directionList.map(item => (
                  <li key={getID()} className={s.aboutDirectionListItem}>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={`${s.subheadItems} ${s.aboutContent}`}>
                {about.part2}
              </p>
            </div>

            <div>
              <h3 className={`subhead ${s.subheadItems}`}>
                {about.consulingTitle}
              </h3>

              {arrayMaping(about.consulting, s.itemsList, s.text, s.textItem)}

              {/* <p className={`${s.subheadItems} ${s.aboutContent}`}>
                {about.consulting1}
              </p>
              <p className={`${s.subheadItems} ${s.aboutContent}`}>
                {about.consulting2}
              </p>
              <p className={`${s.subheadItems} ${s.aboutContent}`}>
                {about.consulting3}
              </p> */}
            </div>
          </div>
        </div>
      </section>
      <Submit />
      <Footer />
    </>
  );
}

export default AboutPageView;
