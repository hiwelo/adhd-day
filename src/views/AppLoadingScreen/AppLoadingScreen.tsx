import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

import { LoadingView } from './components';
import { ScreenPropsInterface } from '../../common/types';

const AppLoadingScreen = ({ navigation }: ScreenPropsInterface) => {
  const { user } = useSelector(state => state.data);

  navigation.navigate(user.name ? 'AppStack' : 'Welcome');

  return (
    <LoadingView>
      <ActivityIndicator size="large" color="rebeccapurple" />
    </LoadingView>
  );
};

export default AppLoadingScreen;
