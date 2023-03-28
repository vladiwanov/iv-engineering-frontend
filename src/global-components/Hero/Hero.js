import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getLanguageMemoised } from 'redux/languages/languages-selector';
import s from './Hero.module.scss';
import Submit from '../../tools/Submit';
import {
  directionAction,
  savedPrevPath,
} from '../../redux/content/content-actions';
import LangContentSelector from '../../additional-components/LanguageContentSelector';
import routes from 'routes';
import io from 'tools/io';

export default function Hero() {
  const dispatch = useDispatch();
  const showDirection = value => dispatch(directionAction(value));
  const currentLanguage = useSelector(getLanguageMemoised);
  const { hero } = LangContentSelector(currentLanguage);
  const savePath = value => dispatch(savedPrevPath(value));
  const { main } = routes;

  useEffect(() => {
    io('hero', '0px', s.contentAnimation);
  }, []);

  const actionCombiner = value => {
    showDirection(value);
    savePath(main);
  };

  return (
    <section className={s.hero}>
      <div className={s.title}>
        <h2 key="subtitle" className={`{title} ${s.heroTitle}`}>
          <i>IV-Engineering</i>
        </h2>
        <h1 key="title" className={`{title} ${s.heroSubtitle}`}>
          {hero.title}
        </h1>
        {/* <h2 className={s.subtitle}>{hero.subtitle}</h2> */}
      </div>

      <ul className={s.heroMenu}>
        {hero.menu.map(({ id, title, direction, pathname, className }) => (
          <li key={id}>
            <NavLink
              id="hero"
              className={`subtitle ${s.heroButton} }`}
              to={{ pathname: `${pathname}` }}
              onClick={() => showDirection(direction)}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className={s.buttonContainer}>
        <NavLink
          id="hero"
          className={`subtitle ${s.heroButton}`}
          to={{ pathname: `${hero.about.pathname}` }}
          onClick={() => actionCombiner(hero.about.direction)}
        >
          {hero.about.title}
        </NavLink>
      </div>

      <Submit />
    </section>
  );
}
