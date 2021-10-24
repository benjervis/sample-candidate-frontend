import {
  Actions,
  Alert,
  ButtonLink,
  Card,
  Heading,
  Loader,
  Stack,
  Text,
  TextLink,
} from 'braid-design-system';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { TransparentCard } from 'src/App/components/TransparentCard';
import type { Job } from 'src/types';

import { useJobsList } from '../JobsPage/JobsContext';

import { loremIpsumParagraphs } from './components/LoremIpsum';

interface JobDetailsPageProps {}

export const JobDetailsPage = ({}: JobDetailsPageProps) => {
  const { jobId } = useParams<{ jobId: string }>();
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(false);
  const [job, setJob] = useState<Job>();

  const { getJob } = useJobsList();

  useEffect(() => {
    setIsClient(true);

    const retrieve = async () => {
      setLoading(true);
      const result = await getJob(jobId);
      setJob(result);
      setLoading(false);
    };

    retrieve();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobId, getJob]);

  if (!isClient || loading) {
    return (
      <Card>
        <Loader />
      </Card>
    );
  }

  if (!jobId || !job) {
    return (
      <Alert tone="caution">
        <Text>
          404: Not found. Click <TextLink href="/">here</TextLink> to return to
          home page.
        </Text>
      </Alert>
    );
  }

  return (
    <Stack space="medium">
      <TransparentCard paddingY="small">
        <Stack space="medium">
          <Heading level="3">{job.title}</Heading>
          <Text>at {job.hirer.name}</Text>
        </Stack>
      </TransparentCard>
      <Card rounded>
        <Stack space="small">
          <Text>{job.description}</Text>
          {loremIpsumParagraphs.map((paragraph, idx) => (
            <Text key={idx}>{paragraph}</Text>
          ))}
        </Stack>
      </Card>

      <TransparentCard paddingY="small">
        <Actions>
          <ButtonLink variant="ghost" href={`/job/${jobId}/apply`}>
            Apply
          </ButtonLink>
        </Actions>
      </TransparentCard>
    </Stack>
  );
};
