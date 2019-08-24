import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'react-native';

import { Container, Message } from './components';
import { ScreenPropsInterface, TabBarIconInterface } from '../../common/types';

const HomeScreen = ({ navigation }: ScreenPropsInterface) => {
  const { user } = useSelector(state => state.data);

  /**
   * Redirects the user to the Welcome page to set the app if no user info available
   */
  const redirectToWelcomeIfUserUnset = () => {
    // early-termination if user already set
    if (user.name) return;

    navigation.navigate('Welcome');
  };
  redirectToWelcomeIfUserUnset();

  return (
    <Container>
      <Message>Hi {user.name}!</Message>
      <Message>Open up App.tsx to start working on your app!</Message>
      <Button onPress={() => navigation.navigate('Welcome')} title="Reset" />
    </Container>
  );
};

HomeScreen.navigationOptions = {
  title: 'Your Day',
  tabBarIcon: ({ tintColor }: TabBarIconInterface) => (
    <Ionicons name="ios-today" size={20} color={tintColor} />
  ),
  tabBarLabel: 'Today',
};

export default HomeScreen;
