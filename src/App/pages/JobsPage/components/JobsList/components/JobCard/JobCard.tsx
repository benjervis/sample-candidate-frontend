import {
  Badge,
  Card,
  Heading,
  Inline,
  Stack,
  Text,
  TextLink,
} from 'braid-design-system';
import React from 'react';

import { employmentTypeDescriptions } from 'src/constants';
import { Job } from 'src/types';

interface JobCardProps {
  job: Job;
}

export const JobCard = ({ job }: JobCardProps) => {
  const { title, description, employmentType, location, postedDate, id } = job;
  const formattedPostedDate = new Date(postedDate).toLocaleDateString();

  return (
    <Card>
      <Stack space="medium">
        <Inline space="small" alignY="bottom">
          <Heading level="3">
            <TextLink href={`/job/${id}`}>{title}</TextLink>
          </Heading>
          <Text>in {location}</Text>
        </Inline>
        <Inline space="small">
          <Badge tone="neutral">{formattedPostedDate}</Badge>
          <Badge tone="neutral">
            {employmentTypeDescriptions[employmentType]}
          </Badge>
        </Inline>
        <Text>{description}</Text>
      </Stack>
    </Card>
  );
};
