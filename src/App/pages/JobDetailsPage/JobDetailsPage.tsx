import { Alert, Text, TextLink } from 'braid-design-system';
import React from 'react';
import { useParams } from 'react-router';

interface JobDetailsPageProps {}

export const JobDetailsPage = ({}: JobDetailsPageProps) => {
  const { jobId } = useParams<{ jobId: string }>();

  if (!jobId) {
    return (
      <Alert tone="critical">
        <Text>
          404: Not found. Click <TextLink href="/">here</TextLink> to return to
          homepage.
        </Text>
      </Alert>
    );
  }

  return <Text>About this job {jobId}</Text>;
};
