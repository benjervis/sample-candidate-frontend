import { sampleApplications } from 'src/sampleData';
import { Application } from 'src/types';

/*
 * Normally this would all be done in an API.
 * We're using an in-memory store to keep things simple.
 */

let store = Object.values(sampleApplications);

// Simulate a bit of delay, so we can see the loading states
const timeout = () => new Promise((resolve) => setTimeout(resolve, 1500));

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
