import { createApplicationsClient } from './applications';
import { createCandidatesClient } from './candidates';
import { createJobsClient } from './jobs';

export const useApi = () => ({
  jobs: createJobsClient(),
  applications: createApplicationsClient(),
  candidates: createCandidatesClient(),
});
