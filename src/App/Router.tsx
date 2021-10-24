import React from 'react';
import { Route, Switch } from 'react-router';

import { ApplicationPage } from './pages/ApplicationPage/ApplicationPage';
import { JobDetailsPage } from './pages/JobDetailsPage/JobDetailsPage';
import { JobsListProvider } from './pages/JobsPage/JobsContext';
import { JobsPage } from './pages/JobsPage/JobsPage';

export const Router = () => (
  <JobsListProvider>
    <Switch>
      <Route path="/job/:jobId/apply" exact>
        <ApplicationPage />
      </Route>

      <Route path="/job/:jobId" exact>
        <JobDetailsPage />
      </Route>

      <Route path="/" exact>
        <JobsPage />
      </Route>
    </Switch>
  </JobsListProvider>
);
