import React from 'react';
import { ButtonProps } from 'react-native';

import { StyledButton } from './components';

const Button = ({ title, onPress }: ButtonProps) => (
  <StyledButton title={title} onPress={onPress} />
);

export default Button;
