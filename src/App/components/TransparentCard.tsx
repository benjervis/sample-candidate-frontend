import { Box } from 'braid-design-system';
import React, { ComponentProps } from 'react';

type BoxProps = ComponentProps<typeof Box>;

type TransparentCardProps = Pick<BoxProps, 'children' | 'paddingY'>;

export const TransparentCard = ({
  children,
  paddingY = 'large',
}: TransparentCardProps) => (
  <Box paddingX="gutter" paddingY={paddingY}>
    {children}
  </Box>
);
