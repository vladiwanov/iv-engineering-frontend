import { NavLink } from 'react-router-dom';
import s from './Navigation.module.scss';
import routes from '../../routes';
import { useDispatch, useSelector } from 'react-redux';
import LangContentSelector from '../../additional-components/LanguageContentSelector';
import {
  directionAction,
  detailsAction,
  savedPrevPath,
} from '../../redux/content/content-actions';
import removeContentStorage from 'tools/removeLocalStorageContent';
import { getLanguageMemoised } from 'redux/languages/languages-selector';
import { useCallback } from 'react';

export default function Navigation({ location }) {
  const currentLanguage = useSelector(getLanguageMemoised);
  const dispatch = useDispatch();
  const getDirection = useCallback(
    value => dispatch(directionAction(value)),
    [dispatch],
  );
  const onShowDeails = useCallback(
    value => dispatch(detailsAction(value)),
    [dispatch],
  );
  const { information_systems, securitysystems, alternative_energy } = routes;
  const { navigation } = LangContentSelector(currentLanguage);

  const funtionCombiner = useCallback(
    value => {
      const clearPrevPath = () => dispatch(savedPrevPath(''));
      onShowDeails('');
      getDirection(value);
      clearPrevPath();
      removeContentStorage();
    },
    [getDirection, onShowDeails, dispatch],
  );

  return (
    <ul className={s.Navigation}>
      <li key={'information-systems'}>
        <NavLink
          className={s.link}
          // activeClassName={s.activeLink}
          onClick={() => funtionCombiner('information-systems')}
          to={`${information_systems}`}
        >
          {navigation[1]}
        </NavLink>
      </li>
      <li key={'securitysystems'}>
        <NavLink
          className={s.link}
          // activeClassName={s.activeLink}
          onClick={() => funtionCombiner('securitysystems')}
          to={`${securitysystems}`}
        >
          {navigation[2]}
        </NavLink>
      </li>
      <li key={'alternative-energy'}>
        <NavLink
          className={s.link}
          // activeClassName={s.activeLink}
          onClick={() => funtionCombiner('alternative-energy')}
          to={`${alternative_energy}`}
        >
          {navigation[3]}
        </NavLink>
      </li>
    </ul>
  );
}
