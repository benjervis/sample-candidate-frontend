import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App/App';
import { EnvironmentProvider } from './hooks/environment';
import { ClientContext } from './types';

export default ({ environment }: ClientContext) => {
  hydrate(
    <EnvironmentProvider value={environment}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </EnvironmentProvider>,
    document.getElementById('app'),
  );
};
