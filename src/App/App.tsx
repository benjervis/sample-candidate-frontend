import 'braid-design-system/reset';

import {
  Box,
  BraidProvider,
  ContentBlock,
  Heading,
  makeLinkComponent,
  Stack,
} from 'braid-design-system';
import { apac } from 'braid-design-system/lib/themes';
import React from 'react';
import { useHistory } from 'react-router';
import { Link as ReactRouterLink } from 'react-router-dom';

import { Router } from './Router';

import * as styles from './styles.css';

const CustomLink = makeLinkComponent(({ href, ...restProps }, ref) =>
  href[0] === '/' ? (
    <ReactRouterLink ref={ref} to={href} {...restProps} />
  ) : (
    <a ref={ref} href={href} {...restProps} />
  ),
);

export default () => {
  const history = useHistory();
  return (
    <BraidProvider theme={apac} linkComponent={CustomLink}>
      <Stack space="medium">
        <Box background="brand">
          <ContentBlock>
            <Box
              paddingY="large"
              paddingX="gutter"
              className={styles.clickableHeading}
              onClick={() => {
                history.push('/');
              }}
            >
              <Heading level="1">Jobsearch</Heading>
            </Box>
          </ContentBlock>
        </Box>

        <ContentBlock>
          <Router />
        </ContentBlock>
      </Stack>
    </BraidProvider>
  );
};
