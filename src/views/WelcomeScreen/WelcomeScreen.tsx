import React from 'react';
import { StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { WelcomeView } from './components';
import { WelcomeStep } from '../../components';
import { setUser } from '../../data/user/actions';
import { ScreenPropsInterface } from '../../common/types';

const WelcomeScreen = ({ navigation }: ScreenPropsInterface) => {
  const { user } = useSelector(state => state.data);
  const dispatch = useDispatch();

  /**
   * Redirects to Home if we already have some info about the user
   */
  if (user.name) navigation.navigate('Home');

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
  headerMode: 'none',
};

export default WelcomeScreen;
