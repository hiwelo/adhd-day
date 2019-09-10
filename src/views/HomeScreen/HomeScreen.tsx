import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native';

import { Container, Message } from './components';
import { ScreenPropsInterface } from '../../common/types';
import { resetUser } from '../../data/user/actions';

const HomeScreen = ({ navigation }: ScreenPropsInterface) => {
  const { user } = useSelector(state => state.data);
  const dispatch = useDispatch();

  /**
   * Redirects the user to the Welcome page to set the app if no user info available
   */
  const redirectToWelcomeIfUserUnset = () => {
    // early-termination if user already set
    if (user.name) return;

    navigation.navigate('AppLoading');
  };
  redirectToWelcomeIfUserUnset();

  /**
   * Resets current user and goes to Sam!
   */
  const resetCurrentUser = () => {
    dispatch(resetUser());

    navigation.navigate('Welcome');
  };

  return (
    <Container>
      <Message>Hi {user.name}!</Message>
      <Message>Open up App.tsx to start working on your app!</Message>
      <Button onPress={() => resetCurrentUser()} title="Reset" />
    </Container>
  );
};

export default HomeScreen;
