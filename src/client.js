import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

import App from './components/App';

const root = document.getElementById('root');

window.main = () => {
  render(App);
};

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NewApp = require('./components/App').default;
    render(NewApp);
  });
}

function render(Root) {
  Loadable.preloadReady().then(() => {
    hydrate(
      <BrowserRouter>
        <Root />
      </BrowserRouter>,
      root,
    );
  });
}
