import {
  Actions,
  Button,
  Column,
  Columns,
  Stack,
  TextField,
} from 'braid-design-system';
import React, { useState } from 'react';

import { JobsListProvider } from './JobsContext';
import { JobsList } from './components/JobsList/JobsList';

export const JobsPage = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <JobsListProvider>
      <Stack space="medium" dividers>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log('Searched');
          }}
        >
          <Columns space="medium" align="center" alignY="center">
            <Column width="1/2">
              <TextField
                id="searchBar"
                aria-label="search field"
                placeholder="e.g. Mechanical Engineer"
                value={searchText}
                onChange={(e) => setSearchText(e.currentTarget.value)}
              />
            </Column>
            <Column width="content">
              <Actions>
                <Button variant="solid" bleedY type="submit">
                  Search
                </Button>
              </Actions>
            </Column>
          </Columns>
        </form>

        <JobsList />
      </Stack>
    </JobsListProvider>
  );
};
