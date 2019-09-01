import React from 'react';

import { Text } from './components';

type ParagraphProps = {
  children: React.ReactNode;
};

const Paragraph = ({
  children,
}: ParagraphProps): React.ReactElement<ParagraphProps> => (
  <Text>{children}</Text>
);

export default Paragraph;
