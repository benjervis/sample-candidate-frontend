import { Environment } from './hooks/environment';

export interface ClientContext {
  environment: Environment;
}

export interface JobRecord {
  hirerId: string;
  title: string;
  description: string;
  location: string;
  employmentType: 'fullTime' | 'partTime' | 'casual' | 'contract';
  id: string;
  postedDate: string;
}

export type Job = Omit<JobRecord, 'hirerId'> & { hirer: Hirer };

export interface Hirer {
  id: string;
  name: string;
}

export interface ApplicationInput {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  answers: string[];
}
