import { sampleJobs } from 'src/sampleData';
import { JobRecord } from 'src/types';

import { timeout } from './common';

/*
 * Normally this would all be done in an API.
 * We're using an in-memory store to keep things simple.
 */

const store = Object.values(sampleJobs);

export const createJobsClient = () => ({
  get: async (searchTerm?: string): Promise<JobRecord[]> => {
    await timeout();

    if (!searchTerm) {
      return store;
    }

    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    return store.filter(
      (job) =>
        job.title.toLowerCase().includes(lowerCaseSearchTerm) ||
        job.description.toLowerCase().includes(lowerCaseSearchTerm),
    );
  },
});
