import React from 'react';
import { Route, Switch } from 'react-router';

import { JobDetailsPage } from './pages/JobDetailsPage/JobDetailsPage';
import { JobsPage } from './pages/JobsPage/JobsPage';

export const Router = () => (
  <Switch>
    <Route path="/" exact>
      <JobsPage />
    </Route>

    <Route path="/job/:jobId">
      <JobDetailsPage />
    </Route>
  </Switch>
);
