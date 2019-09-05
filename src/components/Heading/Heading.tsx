import React from 'react';
import { TextProps } from 'react-native';

import * as HeadingElements from './components';
import { HeadingTypes } from './types';

interface HeadingProps extends TextProps {
  children: React.ReactNode;
  type: HeadingTypes;
}

const Heading = ({ children, type, ...other }: HeadingProps) => {
  const HeadingElement = React.createElement(
    HeadingElements[type],
    other,
    children,
  );

  return HeadingElement;
};

export default Heading;
