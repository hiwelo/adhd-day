import React from 'react';
import { Text, StatusBar } from 'react-native';

import { WelcomeView } from './components';
import { WelcomeStep } from '../../components';

const WelcomeScreen = () => (
  <>
    <WelcomeView>
      <StatusBar barStyle="light-content" />
      <WelcomeStep />
    </WelcomeView>
  </>
);

WelcomeScreen.navigationOptions = {
  headerMode: 'none',
};

export default WelcomeScreen;
