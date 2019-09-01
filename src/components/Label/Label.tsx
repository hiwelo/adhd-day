import React from 'react';

import { LabelText } from './components';

const Label = ({ children }: LabelProps) => <LabelText>{children}</LabelText>;

interface LabelProps {
  children: React.ReactChild;
}

export default Label;
