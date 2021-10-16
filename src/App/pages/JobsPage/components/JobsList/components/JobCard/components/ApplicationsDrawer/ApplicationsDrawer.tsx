import {
  Accordion,
  Actions,
  Box,
  Button,
  Drawer,
  Loader,
  Text,
} from 'braid-design-system';
import React, { Fragment, useEffect, useState } from 'react';

import { useApi } from 'src/App/api';
import { ApplicationWithCandidate } from 'src/types';

import { CandidateApplicationCard } from './components/CandidateApplicationCard/CandidateApplicationCard';

interface ApplicationsDrawerProps {
  jobId: string;
}

export const ApplicationsDrawer = ({ jobId }: ApplicationsDrawerProps) => {
  const api = useApi();
  const [applications, setApplications] = useState<ApplicationWithCandidate[]>(
    [],
  );
  const [loading, setLoading] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const getApplications = async () => {
    setLoading(true);
    const applicationList = await api.applications.getByJobId(jobId);

    const applicationsWithCandidate = await Promise.all(
      applicationList.map(async ({ candidateId, ...application }) => {
        const candidate = await api.candidates.getByCandidateId(candidateId);
        return { ...application, candidate };
      }),
    );

    setApplications(applicationsWithCandidate);
    setLoading(false);
  };

  useEffect(() => {
    getApplications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <Box padding="large" display="flex" justifyContent="center">
        <Loader />
      </Box>
    );
  }

  const numberOfApplications = applications.length;
  const applicationNoun =
    numberOfApplications === 1 ? 'application' : 'applications';

  if (numberOfApplications === 0) {
    return <Text>0 applications</Text>;
  }

  return (
    <Fragment>
      <Actions>
        <Button variant="transparent" onClick={() => setShowDrawer(true)}>
          {numberOfApplications} {applicationNoun}
        </Button>
      </Actions>

      <Drawer
        id={`applications-drawer-${jobId}`}
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
        title="Applications"
      >
        <Accordion>
          {applications.map((application) => (
            <CandidateApplicationCard
              key={application.id}
              application={application}
            />
          ))}
        </Accordion>
      </Drawer>
    </Fragment>
  );
};
