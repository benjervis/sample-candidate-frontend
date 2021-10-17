import { v4 as uuid } from 'uuid';

import { sampleJobs } from 'src/sampleData';
import { Job, JobInput } from 'src/types';

/*
 * Normally this would all be done in an API.
 * We're using an in-memory store to keep things simple.
 */

let store = Object.values(sampleJobs);

// Simulate a bit of delay, so we can see the loading states
const timeout = () => new Promise((resolve) => setTimeout(resolve, 1500));

export const createJobsClient = () => ({
  get: async (searchTerm?: string): Promise<Job[]> => {
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
  create: async (newDetails: JobInput): Promise<Job> => {
    const newJob: Job = {
      ...newDetails,
      id: uuid(),
      postedDate: new Date().toISOString(),
    };

    await timeout();

    store.push(newJob);
    return newJob;
  },
  delete: async (jobId: string) => {
    const keptJobs = store.filter((job) => job.id !== jobId);
    await timeout();

    store = keptJobs;
  },
});
