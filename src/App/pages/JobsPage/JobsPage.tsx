import {
  Actions,
  Box,
  Button,
  Dialog,
  Heading,
  Stack,
} from 'braid-design-system';
import React, { useState } from 'react';

import { JobsListProvider } from './JobsContext';
import { JobsList } from './components/JobsList/JobsList';
import { NewJobForm } from './components/NewJobForm/NewJobForm';

export const JobsPage = () => {
  const [openNewJobFormDialog, setOpenNewJobFormDialog] = useState(false);

  return (
    <JobsListProvider>
      <Stack space="medium" dividers>
        <Box
          paddingLeft="gutter"
          display="flex"
          justifyContent="spaceBetween"
          alignItems="center"
        >
          <Heading level="2">Posted jobs</Heading>

          <Actions>
            <Button
              weight="strong"
              onClick={() => setOpenNewJobFormDialog(true)}
            >
              Post new job
            </Button>
          </Actions>
        </Box>

        <JobsList />

        <Dialog
          id="NewJobFormDialog"
          title="Post new job"
          open={openNewJobFormDialog}
          onClose={() => setOpenNewJobFormDialog(false)}
        >
          <NewJobForm closeForm={() => setOpenNewJobFormDialog(false)} />
        </Dialog>
      </Stack>
    </JobsListProvider>
  );
};
