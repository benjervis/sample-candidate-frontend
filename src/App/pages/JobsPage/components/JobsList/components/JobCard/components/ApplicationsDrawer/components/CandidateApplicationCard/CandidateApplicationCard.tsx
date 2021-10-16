import {
  AccordionItem,
  Card,
  IconNewWindow,
  Inline,
  Stack,
  Text,
  TextLink,
} from 'braid-design-system';
import React from 'react';

import { ApplicationWithCandidate } from 'src/types';

interface CandidateApplicationCardProps {
  application: ApplicationWithCandidate;
}

export const CandidateApplicationCard = ({
  application,
}: CandidateApplicationCardProps) => {
  const { candidate, coverLetterText, resumeLink, questions } = application;
  const name = `${candidate.firstName} ${candidate.lastName}`;

  return (
    <AccordionItem
      id={`application-${application.id}-candidate-${candidate.id}`}
      label={name}
    >
      <Card tone="formAccent">
        <Stack space="large">
          <Inline space="large">
            <Text>
              <TextLink href={resumeLink}>
                Resume <IconNewWindow />{' '}
              </TextLink>
            </Text>

            <Text>
              <TextLink href={`mailto:${candidate.email}`}>
                {candidate.email}
              </TextLink>
            </Text>
          </Inline>

          <Stack space="medium">
            <Text weight="medium">Cover letter</Text>
            <Text size="small">{coverLetterText}</Text>
          </Stack>

          <Stack space="medium">
            <Text weight="medium">Questions</Text>
            {questions.map((question) => (
              <Stack space="small" key={question.id}>
                <Text tone="secondary">{question.questionText}</Text>
                <Text>{question.answer}</Text>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Card>
    </AccordionItem>
  );
};
