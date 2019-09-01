import React from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';

import { WelcomeView } from './components';
import { WelcomeStep } from '../../components';
import { ScreenPropsInterface } from '../../common/types';

const WelcomeScreen = ({ navigation }: ScreenPropsInterface) => {
  const { user } = useSelector(state => state.data);

  /**
   * Redirects to Home if we already have some info about the user
   */
  if (user.name) navigation.navigate('Home');

  return (
    <>
      <WelcomeView>
        <StatusBar barStyle="light-content" />
        <WelcomeStep />
      </WelcomeView>
    </>
  );
};

WelcomeScreen.navigationOptions = {
  headerMode: 'none',
};

export default WelcomeScreen;
