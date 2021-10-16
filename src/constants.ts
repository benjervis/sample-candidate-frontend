import { Job } from './types';

export const employmentTypeDescriptions: Record<
  Job['employmentType'],
  string
> = {
  fullTime: 'Full time',
  partTime: 'Part time',
  casual: 'Casual',
  contract: 'Contract',
};
