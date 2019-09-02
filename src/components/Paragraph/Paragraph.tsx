import React from 'react';

import { Text, TextProps } from './components';

interface ParagraphProps extends TextProps {
  children: React.ReactNode;
}

const Paragraph = ({
  children,
  ...others
}: ParagraphProps): React.ReactElement<ParagraphProps> => (
  <Text {...others}>{children}</Text>
);

export default Paragraph;
