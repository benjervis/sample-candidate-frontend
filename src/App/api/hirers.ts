import { sampleHirers } from 'src/sampleData';
import { Hirer } from 'src/types';

import { timeout } from './common';

/*
 * Normally this would all be done in an API.
 * We're using an in-memory store to keep things simple.
 */

const store = Object.values(sampleHirers);

export const createHirersClient = () => ({
  getById: async (hirerId: string): Promise<Hirer | undefined> => {
    await timeout();

    return store.find((hirer) => hirer.id === hirerId);
  },
  get: async (): Promise<Hirer[]> => {
    await timeout();

    return store;
  },
});
