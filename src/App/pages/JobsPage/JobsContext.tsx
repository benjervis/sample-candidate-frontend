import React, { createContext, useContext, useMemo, useState } from 'react';

import { useApi } from 'src/App/api';
import { Job } from 'src/types';

interface JobsListContext {
  jobsList: Job[];
  loadJobs: (searchTerm?: string) => Promise<void>;
  getJob: (jobId: string) => Promise<Job | undefined>;
}

const JobsContext = createContext<JobsListContext>({
  jobsList: [],
  loadJobs: () => new Promise(() => {}),
  getJob: () => new Promise(() => {}),
});

export const useJobsList = () => {
  const context = useContext(JobsContext);

  if (!context) {
    throw new Error('useJobsList must be used within a JobsListProvider');
  }

  return context;
};

interface JobsListProviderProps {
  children: React.ReactNode;
}

export const JobsListProvider = ({ children }: JobsListProviderProps) => {
  const [jobsList, setJobsList] = useState<Job[]>([]);
  const api = useApi();

  const loadJobs = async (searchTerm?: string) => {
    const newJobRecordsList = await api.jobs.get(searchTerm);

    const sortedJobRecordsList = newJobRecordsList.sort((a, b) =>
      a.postedDate > b.postedDate ? 1 : -1,
    );

    const sortedJobsList = await Promise.all(
      sortedJobRecordsList.map(async (job) => {
        const hirer = await api.hirers.getById(job.hirerId);

        if (!hirer) {
          throw new Error(`No hirer exists with ID ${job.hirerId}`);
        }

        return { ...job, hirer };
      }),
    );

    setJobsList(sortedJobsList);
  };

  const getJob = async (jobId: string) => {
    if (jobsList.length === 0) {
      await loadJobs();
    }

    return jobsList.find((job) => job.id === jobId);
  };

  const value = useMemo(
    () => ({ jobsList, loadJobs, getJob }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [jobsList],
  );

  return <JobsContext.Provider value={value}>{children}</JobsContext.Provider>;
};
