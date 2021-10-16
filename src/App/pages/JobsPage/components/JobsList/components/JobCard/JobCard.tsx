import { Badge, Card, Heading, Inline, Stack, Text } from 'braid-design-system';
import React from 'react';

import { employmentTypeDescriptions } from 'src/constants';
import { Job } from 'src/types';

import { ApplicationsDrawer } from './components/ApplicationsDrawer/ApplicationsDrawer';

interface JobCardProps {
  job: Job;
}

export const JobCard = ({ job }: JobCardProps) => {
  const { title, description, employmentType, location, postedDate } = job;
  const formattedPostedDate = new Date(postedDate).toLocaleDateString();

  return (
    <Card>
      <Stack space="medium">
        <Inline space="small" alignY="bottom">
          <Heading level="3">{title}</Heading>
          <Text>in {location}</Text>
        </Inline>
        <Inline space="small">
          <Badge tone="neutral">{formattedPostedDate}</Badge>
          <Badge tone="neutral">
            {employmentTypeDescriptions[employmentType]}
          </Badge>
        </Inline>
        <Text>{description}</Text>

        <ApplicationsDrawer jobId={job.id} />
      </Stack>
    </Card>
  );
};
