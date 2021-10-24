import React from 'react';
import { Route, Switch } from 'react-router';

import { JobDetailsPage } from './pages/JobDetailsPage/JobDetailsPage';
import { JobsListProvider } from './pages/JobsPage/JobsContext';
import { JobsPage } from './pages/JobsPage/JobsPage';

export const Router = () => (
  <JobsListProvider>
    <Switch>
      <Route path="/" exact>
        <JobsPage />
      </Route>

      <Route path="/job/:jobId" exact>
        <JobDetailsPage />
      </Route>
    </Switch>
  </JobsListProvider>
);
