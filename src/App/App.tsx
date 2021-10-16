import 'braid-design-system/reset';

import {
  Box,
  BraidProvider,
  ContentBlock,
  Heading,
  Stack,
} from 'braid-design-system';
import { apac } from 'braid-design-system/lib/themes';
import React from 'react';

import { JobsPage } from './pages/JobsPage/JobsPage';

export default () => (
  <BraidProvider theme={apac}>
    <Stack space="medium">
      <Box background="brand">
        <ContentBlock>
          <Box paddingY="large" paddingX="gutter">
            <Heading level="1">Jobsearch</Heading>
          </Box>
        </ContentBlock>
      </Box>

      <ContentBlock>
        <JobsPage />
      </ContentBlock>
    </Stack>
  </BraidProvider>
);
