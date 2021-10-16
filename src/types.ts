import { Environment } from './hooks/environment';

export interface ClientContext {
  environment: Environment;
}

export interface Job {
  hirerId: string;
  title: string;
  description: string;
  location: string;
  employmentType: 'fullTime' | 'partTime' | 'casual' | 'contract';
  id: string;
  postedDate: string;
}

export type JobInput = Omit<Job, 'id' | 'postedDate'>;

export interface Candidate {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface ApplicationQuestion {
  id: string;
  questionText: string;
  answer: string;
}

export interface Application {
  id: string;
  jobId: string;
  candidateId: string;
  resumeLink: string;
  coverLetterText: string;
  questions: ApplicationQuestion[];
}

export type ApplicationWithCandidate = Omit<Application, 'candidateId'> & {
  candidate: Candidate;
};
