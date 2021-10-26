import { ApplicationInput } from 'src/types';

import { timeout } from './common';

/*
 * Normally this would all be done in an API.
 * We're using an in-memory store to keep things simple.
 */

const store: ApplicationInput[] = [];

export const createApplicationsClient = () => ({
  save: async (application: ApplicationInput) => {
    await timeout();

    store.push(application);
  },
});
