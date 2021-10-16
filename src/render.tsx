import React from 'react';
import ReactDOM from 'react-dom/server';
import { Render } from 'sku';

import App from './App/App';
import { EnvironmentProvider, isEnvironment } from './hooks/environment';
import { ClientContext } from './types';

interface RenderContext {
  appHtml: string;
}

const skuRender: Render<RenderContext> = {
  renderApp: ({ SkuProvider, environment }) => {
    if (!isEnvironment(environment)) {
      throw Error(`unrecognised environment: ${environment}`);
    }

    const appHtml = ReactDOM.renderToString(
      <SkuProvider>
        <EnvironmentProvider value={environment}>
          <App />
        </EnvironmentProvider>
      </SkuProvider>,
    );

    return { appHtml };
  },

  provideClientContext: ({ environment }): ClientContext => {
    if (!isEnvironment(environment)) {
      throw Error(`unrecognised environment: ${environment}`);
    }

    return { environment };
  },

  renderDocument: ({ app, bodyTags, headTags }) => `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${headTags}
      </head>
      <body>
        <div id="app">${app.appHtml}</div>
        ${bodyTags}
      </body>
    </html>
  `,
};

export default skuRender;
