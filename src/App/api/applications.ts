import { sampleApplications } from 'src/sampleData';
import { Application } from 'src/types';

import { timeout } from './common';

/*
 * Normally this would all be done in an API.
 * We're using an in-memory store to keep things simple.
 */

let store = Object.values(sampleApplications);

export const createApplicationsClient = () => ({
  getByJobId: async (jobId: string): Promise<Application[]> => {
    const applications = store.filter(
      (application) => application.jobId === jobId,
    );
    await timeout();
    return applications;
  },
  delete: async (applicationId: string) => {
    const keptApplications = store.filter(
      (application) => application.id !== applicationId,
    );
    await timeout();

    store = keptApplications;
  },
});
