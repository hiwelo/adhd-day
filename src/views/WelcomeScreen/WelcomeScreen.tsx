import React from 'react';
import { StatusBar } from 'react-native';
import { useDispatch } from 'react-redux';

import { WelcomeView } from './components';
import { WelcomeStep } from '../../components';
import { setUser } from '../../data/user/actions';
import { ScreenPropsInterface } from '../../common/types';

const WelcomeScreen = ({ navigation }: ScreenPropsInterface) => {
  const dispatch = useDispatch();

  const configureUser = payload => {
    if (!payload.name) return;

    dispatch(setUser(payload));
    navigation.navigate('Home');
  };

  return (
    <>
      <WelcomeView>
        <StatusBar barStyle="light-content" />
        <WelcomeStep submitCallback={configureUser} />
      </WelcomeView>
    </>
  );
};

WelcomeScreen.navigationOptions = {
  headerMode: 'none'
};

export default WelcomeScreen;
