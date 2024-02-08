import { Routes, Route } from 'react-router';
import { Suspense, useCallback, useEffect, useState } from 'react';
import routes from './routes';
import componentsLoad from './componentsLoad';
import getSubmitStatusSelector from './redux/submit/submit-selectors';
import { useSelector } from 'react-redux';
import SuccessSubmitPage from 'views/SuccessSubmitPage';
import ErrorSubmitPage from 'views/ErrorSubmitPage';
import LoaderModule from 'tools/LoaderModule';

const App = () => {
  const {
    HomePageView,
    AboutPageView,
    DetailsPage,
    NotFoundPage,
    SelectContent,
    InformationSystems,
    SecuritySystems,
    AlternativeEnergy,
  } = componentsLoad;

  const hashes = Object.values(routes);
  hashes.splice(0, 6);

  
  const {
    main,
    systems,
    about,
    information_systems,
    securitysystems,
    alternative_energy,
  } = routes;

  const responseSubmit = useSelector(getSubmitStatusSelector);

  const styles = {
    overflow: 'hidden',
  };

  const alarmStyles = {
    fontSize: '24px',
    textAlign: 'center',
    margin: '150px auto',
    color: '#00BFFF',
  };
  return (
    <div style={styles}>
      {responseSubmit === 'success' && <SuccessSubmitPage />}
      {responseSubmit === 'Network Error' && <ErrorSubmitPage />}
      {responseSubmit === 'Loading' && (
        <div style={alarmStyles}>
          <h3>Server connection </h3>
          <LoaderModule />
        </div>
      )}
      {responseSubmit === 'idle' && (
        <Suspense
          fallback={
            <div style={alarmStyles}>
              <h3>Loading</h3>
              <LoaderModule />
            </div>
          }
        >
          <Routes>
            <Route path={systems} element={<DetailsPage />}>
              <Route
                // path={`${information_systems}`}
                path={information_systems}
                element={
                  <InformationSystems
                    state={{
                      pathname: information_systems,
                    }}
                  />
                }
              />











              <Route
                path={securitysystems}
                element={
                  <SecuritySystems
                    state={{
                      pathname: securitysystems,
                    }}
                  />
                }
              />
              <Route
                path={`${alternative_energy}`}
                element={
                  <AlternativeEnergy
                    state={{
                      pathname: alternative_energy,
                    }}
                  />
                }
              />

              {hashes.map(hash => (
                <Route
                  key={hash}
                  path={hash}
                  element={
                    <SelectContent
                      state={{
                        pathname: { hash },
                      }}
                    />










                    
                  }
                />
              ))}
              <Route path={'*'} element={<NotFoundPage />} />
            </Route>
            <Route path={about} element={<AboutPageView />} />
            <Route path={main} element={<HomePageView />} />
            <Route path={'*'} element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      )}
    </div>
  );
};
export default App;
