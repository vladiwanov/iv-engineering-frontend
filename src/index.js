import React from 'react';
import { createRoot } from 'react-dom/client';
import 'utils/styles/main.scss';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App.js';
import './utils/styles/main.scss';
// import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store.store}> */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  // document.getElementById('root'),
);
