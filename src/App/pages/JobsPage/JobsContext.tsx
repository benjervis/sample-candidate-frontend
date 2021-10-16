import React, { createContext, useContext, useMemo, useState } from 'react';

import { useApi } from 'src/App/api';
import { Job, JobInput } from 'src/types';

interface JobsListContext {
  jobsList: Job[];
  addJob: (newJob: JobInput) => Promise<void>;
  loadJobs: () => Promise<void>;
  removeJob: (jobIdToRemove: string) => Promise<void>;
}

const JobsContext = createContext<JobsListContext>({
  jobsList: [],
  loadJobs: () => new Promise(() => {}),
  addJob: () => new Promise(() => {}),
  removeJob: () => new Promise(() => {}),
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

  const loadJobs = async () => {
    const newJobsList = await api.jobs.get();
    const sortedJobsJList = newJobsList.sort((a, b) =>
      a.postedDate > b.postedDate ? 1 : -1,
    );
    setJobsList(sortedJobsJList);
  };

  const addJob = async (newJobDetails: JobInput) => {
    const oldJobs = [...jobsList];
    const newJob = await api.jobs.create(newJobDetails);
    setJobsList([...oldJobs, newJob]);
  };

  const removeJob = async (jobIdToRemove: string) => {
    await api.jobs.delete(jobIdToRemove);
    setJobsList((prev) => prev.filter((job) => job.id !== jobIdToRemove));
  };

  const value = useMemo(
    () => ({ jobsList, addJob, removeJob, loadJobs }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [jobsList],
  );

  return <JobsContext.Provider value={value}>{children}</JobsContext.Provider>;
};
