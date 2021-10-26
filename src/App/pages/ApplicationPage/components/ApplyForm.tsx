import {
  Actions,
  Button,
  ButtonLink,
  Dropdown,
  Stack,
  TextField,
  TextLink,
  Text,
  Box,
  Loader,
  Alert,
  Heading,
} from 'braid-design-system';
import { Form, Formik, useField } from 'formik';
import React, { ComponentProps, useEffect, useState } from 'react';

import { useApi } from 'src/App/api';
import { ApplicationInput } from 'src/types';

import { useJobsList } from '../../JobsPage/JobsContext';

const initialValues: ApplicationInput = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  answers: [],
};

const validateRequiredField = (val: unknown) =>
  typeof val !== 'string' || val.length === 0 ? 'This field is required' : '';

interface FormikBraidTextFieldProps {
  name: string;
  label: string;
  required?: boolean;
  type?: ComponentProps<typeof TextField>['type'];
}

const FormikBraidTextField = ({
  name,
  label,
  type = 'text',
  required = false,
}: FormikBraidTextFieldProps) => {
  const [field, meta] = useField({
    name,
    validate: required ? validateRequiredField : undefined,
  });

  const errorMessage = meta.touched && meta.error ? meta.error : undefined;
  return (
    <TextField
      id={`${name}TextField`}
      {...field}
      label={label}
      message={errorMessage}
      tone={errorMessage ? 'critical' : 'positive'}
      value={field.value}
      type={type}
    />
  );
};

interface FormikBraidDropdownProps {
  name: string;
  label: string;
  required?: boolean;
  children: ComponentProps<typeof Dropdown>['children'];
}

const FormikBraidDropdown = ({
  name,
  label,
  required = false,
  children,
}: FormikBraidDropdownProps) => {
  const [field, meta] = useField({
    name,
    validate: required ? validateRequiredField : undefined,
  });

  const errorMessage = meta.touched && meta.error ? meta.error : undefined;
  return (
    <Dropdown
      id={`${name}Dropdown`}
      {...field}
      label={label}
      message={errorMessage}
      tone={errorMessage ? 'critical' : 'positive'}
      value={field.value}
    >
      {children}
    </Dropdown>
  );
};

interface ApplyFormProps {
  jobId: string;
}

export const ApplyForm = ({ jobId }: ApplyFormProps) => {
  const { jobsList, loadJobs } = useJobsList();
  const api = useApi();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const initialise = async () => {
      setLoading(true);
      await loadJobs();
      setLoading(false);
    };

    if (jobsList.length === 0) {
      initialise();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <Box padding="large" display="flex" justifyContent="center">
        <Loader />
      </Box>
    );
  }

  const job = jobsList.find(({ id }) => id === jobId);

  if (!job) {
    return (
      <Alert tone="critical">
        <Text>
          No job found with id {jobId}. Click <TextLink href="/">here</TextLink>{' '}
          to return to the home page.
        </Text>
      </Alert>
    );
  }

  const onSubmit = async (application: ApplicationInput) => {
    await api.applications.save(application);
    setSubmitted(true);
  };

  return (
    <Stack space="large">
      <Stack space="medium">
        <Heading level="3">{job.title}</Heading>
        <Text>at {job.hirer.name}</Text>
      </Stack>

      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <Stack space="medium">
              <FormikBraidTextField
                label="First Name"
                name="firstName"
                required
              />
              <FormikBraidTextField
                label="Last Name"
                name="lastName"
                required
              />
              <FormikBraidTextField
                label="Email address"
                name="email"
                type="email"
                required
              />
              <FormikBraidTextField
                label="Phone Number"
                name="phoneNumber"
                type="tel"
                required
              />

              <FormikBraidDropdown label="Resume" name="resume" required>
                {[
                  ['first', 'my resume.docx'],
                  ['second', 'RESUME FINAL_v1.pdf'],
                ].map(([code, name]) => (
                  <option key={code} value={code}>
                    {name}
                  </option>
                ))}
              </FormikBraidDropdown>

              <Actions>
                <Button
                  variant="solid"
                  tone="brandAccent"
                  type="submit"
                  loading={isSubmitting}
                >
                  {isSubmitting ? 'Submitting' : 'Submit'}
                </Button>

                <ButtonLink href={`/job/${jobId}`} variant="transparent">
                  Cancel
                </ButtonLink>
              </Actions>
            </Stack>
          </Form>
        )}
      </Formik>
      {submitted ? (
        <Alert tone="positive">
          <Text>
            Application submitted successfully! Click{' '}
            <TextLink href="/">here</TextLink> to return to the home page.
          </Text>
        </Alert>
      ) : null}
    </Stack>
  );
};
