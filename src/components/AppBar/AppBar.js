import s from './AppBar.module.scss';
import { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../../content-components/Navigation';
import { useDispatch } from 'react-redux';
import * as contentActions from '../../redux/content/content-actions';
import removeContentStorage from 'tools/removeLocalStorageContent';
import LanguageButton from 'additional-components/LanguageButton';
import routes from 'routes';

export default function AppBar() {
  const { detailsAction } = contentActions;
  const { main } = routes;
  const dispatch = useDispatch();
  const onShowDeails = useCallback(
    () => dispatch(detailsAction('')),
    [dispatch],
  );
  const funtionCombiner = useCallback(
    value => {
      onShowDeails('');
      removeContentStorage();
    },
    [onShowDeails],
  );

  return (
    <header className={`${s.header} `}>
      <NavLink onClick={() => funtionCombiner('')} to={main}>
        <p className={` ${s.logo}`}>
          <i>IV-Engineering</i>
        </p>
      </NavLink>
      <LanguageButton />
      <Navigation />
    </header>
  );
}
