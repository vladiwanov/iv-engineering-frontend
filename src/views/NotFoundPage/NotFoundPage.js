import React from 'react';
import CloseButton from 'tools/CloseButton';
import s from './NotFoundPage.module.scss';
// import { useSelector } from 'react-redux';
// import { getSavedPrevPath } from 'redux/conte/nt/content-selectors';
// import routes from 'routes';

export default function NotFoundPage() {
  // const savedPath = useSelector(getSavedPrevPath);
  // const routesAray = Object.values(routes);
  let rez = false;
  return (
    <div className={s.notFound}>
      <CloseButton />
      <h2 className={`${s.heads} ${s.headsNotFound}`}> 404 Page not Found </h2>

      {rez && (
        <h2 className={s.subheadItems}>
          Sorry, page is in developing at this moment
        </h2>
      )}
    </div>
  );
}
