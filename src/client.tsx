import React from 'react';
import { hydrate } from 'react-dom';

import App from './App/App';
import { EnvironmentProvider } from './hooks/environment';
import { ClientContext } from './types';

export default ({ environment }: ClientContext) => {
  hydrate(
    <EnvironmentProvider value={environment}>
      <App />
    </EnvironmentProvider>,
    document.getElementById('app'),
  );
};
