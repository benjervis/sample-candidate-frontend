import {
  Actions,
  Button,
  Dropdown,
  Stack,
  TextField,
  TextLinkButton,
} from 'braid-design-system';
import { Form, Formik, useField } from 'formik';
import React, { ComponentProps } from 'react';

import { employmentTypeDescriptions } from 'src/constants';
import { JobInput } from 'src/types';

import { useJobsList } from '../../JobsContext';

const initialValues: JobInput = {
  hirerId: '',
  title: '',
  description: '',
  location: '',
  employmentType: 'fullTime',
};

const validateRequiredField = (val: unknown) =>
  typeof val !== 'string' || val.length === 0 ? 'This field is required' : '';

interface FormikBraidTextFieldProps {
  name: string;
  label: string;
  required?: boolean;
}

const FormikBraidTextField = ({
  name,
  label,
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

interface NewJobFormProps {
  closeForm: () => void;
}

export const NewJobForm = ({ closeForm }: NewJobFormProps) => {
  const { addJob } = useJobsList();

  const submitNewJob = async (data: JobInput) => {
    await addJob(data);
    closeForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={submitNewJob}>
      {({ isSubmitting }) => (
        <Form>
          <Stack space="medium">
            <FormikBraidTextField label="Job title" name="title" required />
            <FormikBraidTextField label="Location" name="location" required />
            <FormikBraidTextField
              label="Description"
              name="description"
              required
            />
            <FormikBraidTextField label="Hirer ID" name="hirerId" required />

            <FormikBraidDropdown
              label="Employment type"
              name="employmentType"
              required
            >
              {Object.entries(employmentTypeDescriptions).map(
                ([code, name]) => (
                  <option key={code} value={code}>
                    {name}
                  </option>
                ),
              )}
            </FormikBraidDropdown>

            <Actions>
              <Button weight="strong" type="submit" loading={isSubmitting}>
                {isSubmitting ? 'Saving' : 'Save'}
              </Button>
              <TextLinkButton onClick={closeForm}>Cancel</TextLinkButton>
            </Actions>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};
