import { sampleCandidates } from 'src/sampleData';
import { Candidate } from 'src/types';

import { timeout } from './common';

/*
 * Normally this would all be done in an API.
 * We're using an in-memory store to keep things simple.
 */

let store = Object.values(sampleCandidates);

export const createCandidatesClient = () => ({
  getAll: async (): Promise<Candidate[]> => {
    await timeout();
    return store;
  },
  getByCandidateId: async (candidateId: string): Promise<Candidate> => {
    const candidate = store.find((c) => c.id === candidateId);
    await timeout();
    return candidate!;
  },
  delete: async (applicationId: string) => {
    const keptCandidates = store.filter(
      (application) => application.id !== applicationId,
    );
    await timeout();

    store = keptCandidates;
  },
});
