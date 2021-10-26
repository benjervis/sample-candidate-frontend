import { Alert, Card, Loader, Text, TextLink } from 'braid-design-system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { ApplyForm } from './components/ApplyForm';

export const ApplicationPage = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Card>
        <Loader />
      </Card>
    );
  }

  if (!jobId) {
    return (
      <Alert tone="caution">
        <Text>
          404 not found. Click <TextLink href="/">here</TextLink> to return to
          home page.
        </Text>
      </Alert>
    );
  }

  return <ApplyForm jobId={jobId} />;
};
