import { Box, Card, Loader, Stack, Text } from 'braid-design-system';
import React, { useEffect, useState } from 'react';

import { useJobsList } from '../../JobsContext';

import { JobCard } from './components/JobCard/JobCard';

interface JobsListProps {
  searchTerm?: string;
}

export const JobsList = ({ searchTerm }: JobsListProps) => {
  const { jobsList, loadJobs } = useJobsList();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      await loadJobs(searchTerm);
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  if (loading) {
    return (
      <Box padding="large" display="flex" justifyContent="center">
        <Loader />
      </Box>
    );
  }

  if (jobsList.length === 0) {
    return (
      <Card>
        <Text>No jobs</Text>
      </Card>
    );
  }

  return (
    <Stack space="large">
      {jobsList.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </Stack>
  );
};
