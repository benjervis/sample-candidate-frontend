import { createHirersClient } from './hirers';
import { createJobsClient } from './jobs';

export const useApi = () => ({
  hirers: createHirersClient(),
  jobs: createJobsClient(),
});
