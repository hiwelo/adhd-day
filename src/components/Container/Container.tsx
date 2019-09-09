import React from 'react';
import { ViewProps } from 'react-native';

import { SafeArea } from './components';

interface Container extends ViewProps {
  children?: React.ReactNode;
}

const Container = ({ children }: Container) => <SafeArea>{children}</SafeArea>;

export default Container;
