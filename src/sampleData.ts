import { Hirer, JobRecord } from 'src/types';

export const sampleJobs: Record<string, JobRecord> = {
  'ab4a6c86-d61a-45a8-9427-347e7c4e4781': {
    id: 'ab4a6c86-d61a-45a8-9427-347e7c4e4781',
    title: 'Compensation Analyst ',
    description:
      'Learn From Home is looking for a compensation analyst to join their team. We are looking for candidates with at least five years of experience, and require them to perform detailed research and analysis and provide thoughtful recommendations to the company. This is a part-time position.',
    hirerId: 'edb0dfeb-3156-463d-80e1-3ca6b92b42fb',
    employmentType: 'partTime',
    location: 'Camargo',
    postedDate: '2020-12-24T03:05:36Z',
  },
  '9164190c-49ba-4ea6-98a1-c1984a80a448': {
    id: '9164190c-49ba-4ea6-98a1-c1984a80a448',
    title: 'Senior Developer',
    description:
      'We are looking for a senior Python developer to join our fast growing team at H2o Software. The position is remote, and requires the chosen candidate to manage a team of 10.',
    hirerId: '802799b9-f19d-4b21-a853-c2ada6ad301b',
    employmentType: 'partTime',
    location: 'Huari',
    postedDate: '2020-02-01T03:05:36Z',
  },
  '0d9c39f9-9a9f-4d10-acea-f847977047c9': {
    id: '0d9c39f9-9a9f-4d10-acea-f847977047c9',
    title: 'Biostatistician II',
    description:
      'The Ministry of Health, Labour and Welfare of Japan is searching for a Biostatistician II. Candidates need to have a minimum of four years’ experience in biostatistics, and must have a Master’s degree relating to health.',
    hirerId: '69c2353b-a7b5-40ab-bbcc-2029c1b0fa41',
    employmentType: 'partTime',
    location: 'Nagoya',
    postedDate: '2020-03-02T03:05:36Z',
  },
  'b0ba05a0-ae19-469d-b366-5fa748be6551': {
    id: 'b0ba05a0-ae19-469d-b366-5fa748be6551',
    title: 'VP Sales',
    description:
      'Our well established company in the retail division is looking for a highly motivated individual to take on the position of VP of Sales. We work in a competitive market, and need a candidate who will thrive in this environment.',
    hirerId: 'e7857acb-5c9c-4571-9f87-b29be89fd796',
    employmentType: 'contract',
    location: 'Guadalupe',
    postedDate: '2020-20-12T03:05:36Z',
  },
  '3f0797ec-2b4a-4ec8-9c04-c4b40f95c417': {
    id: '3f0797ec-2b4a-4ec8-9c04-c4b40f95c417',
    title: 'Paralegal',
    description:
      'Our law firm is hiring a new paralegal. The position is for candidates with two to five years of experience, and who are very comfortable working collaboratively. The contract is for six months, with a possibility of renewal or a permanent position.',
    hirerId: '4ad0bc1a-2cb3-43ac-91b4-28d4f17eeb5c',
    employmentType: 'contract',
    location: 'Penedo',
    postedDate: '2022-01-18T03:05:36Z',
  },
  '1d954209-c0c1-46ba-b584-4d535e78c63d': {
    id: '1d954209-c0c1-46ba-b584-4d535e78c63d',
    title: 'Mechanical Systems Engineer',
    description:
      'Longpine Manufacturers is looking for a mechanical systems engineer to tackle the task of designing, implementing, and monitoring new equipment that will be used for the design of silicon moulds. Five years of experience is advantageous, but candidates with two years of experience and up will be considered.',
    hirerId: '26445974-6842-49de-bacf-9b6db9e28c5f',
    employmentType: 'partTime',
    location: 'Cape Town',
    postedDate: '2020-01-10T03:05:36Z',
  },
  'a4fa5ad3-25b8-4925-a627-293d8d86fc74': {
    id: 'a4fa5ad3-25b8-4925-a627-293d8d86fc74',
    title: 'Food Chemist',
    description:
      'Very Vegan is searching for a Food Chemist to join their unique and diverse team. We are experiencing rapid growth, and therefore need to expand our team. We require the chosen candidate to focus on the development of new beverage products to market to supermarkets in the Philippines.',
    hirerId: '9f50d04b-db38-4442-9eaf-4e9473d2a447',
    employmentType: 'contract',
    location: 'Sydney',
    postedDate: '2020-01-25T03:05:36Z',
  },
  '8ba10f4a-1b4a-411f-a88c-8e25b19bc2f4': {
    id: '8ba10f4a-1b4a-411f-a88c-8e25b19bc2f4',
    title: 'Pharmacist',
    description:
      'Our family-owned pharmacy is searching for a well-experienced pharmacist to work full time. Impeccable communication and customer service skills are crucial.',
    hirerId: '923bed05-1a95-4242-b64b-78b02fece3b2',
    employmentType: 'fullTime',
    location: 'Pécs',
    postedDate: '2022-02-18T03:05:36Z',
  },
  'ec3705a4-c745-4043-bcda-d30641cd55a0': {
    id: 'ec3705a4-c745-4043-bcda-d30641cd55a0',
    title: 'VP Sales',
    description:
      'Journeyman is a new travel booking service that requires a VP of Sales to join the team as soon as possible. The position is a contract, but with the possibility of becoming permanent.       ',
    hirerId: '6f80034b-1f9f-4733-b891-ddf3773652e4',
    employmentType: 'contract',
    location: 'Vouani',
    postedDate: '2020-02-01T03:05:36Z',
  },
  'b02a6908-b970-480e-b307-4d556cdea211': {
    id: 'b02a6908-b970-480e-b307-4d556cdea219',
    title: 'Senior Cost Accountant',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    hirerId: '1454b54f-5d75-4235-b6bb-51a214ad9db4',
    employmentType: 'casual',
    location: 'Yasnogorsk',
    postedDate: '2020-12-24T03:05:36Z',
  },
};

export const sampleHirers: Record<string, Hirer> = {
  'edb0dfeb-3156-463d-80e1-3ca6b92b42fb': {
    id: 'edb0dfeb-3156-463d-80e1-3ca6b92b42fb',
    name: 'Learn From Home',
  },
  '802799b9-f19d-4b21-a853-c2ada6ad301b': {
    id: '802799b9-f19d-4b21-a853-c2ada6ad301b',
    name: 'H2O Software',
  },
  '69c2353b-a7b5-40ab-bbcc-2029c1b0fa41': {
    id: '69c2353b-a7b5-40ab-bbcc-2029c1b0fa41',
    name: 'The Ministry of Health, Labour and Welfare of Japan',
  },
  'e7857acb-5c9c-4571-9f87-b29be89fd796': {
    id: 'e7857acb-5c9c-4571-9f87-b29be89fd796',
    name: 'ABC Group',
  },
  '4ad0bc1a-2cb3-43ac-91b4-28d4f17eeb5c': {
    id: '4ad0bc1a-2cb3-43ac-91b4-28d4f17eeb5c',
    name: 'Thompson Richardson Harrison Partners',
  },
  '26445974-6842-49de-bacf-9b6db9e28c5f': {
    id: '26445974-6842-49de-bacf-9b6db9e28c5f',
    name: 'Longpine Manufacturers',
  },
  '9f50d04b-db38-4442-9eaf-4e9473d2a447': {
    id: '9f50d04b-db38-4442-9eaf-4e9473d2a447',
    name: 'Very Vegan',
  },
  '923bed05-1a95-4242-b64b-78b02fece3b2': {
    id: '923bed05-1a95-4242-b64b-78b02fece3b2',
    name: 'Prahran Pharmacy',
  },
  '6f80034b-1f9f-4733-b891-ddf3773652e4': {
    id: '6f80034b-1f9f-4733-b891-ddf3773652e4',
    name: 'Journeyman',
  },
  '1454b54f-5d75-4235-b6bb-51a214ad9db4': {
    id: '1454b54f-5d75-4235-b6bb-51a214ad9db4',
    name: 'Lorem Ipsum Industries',
  },
};
