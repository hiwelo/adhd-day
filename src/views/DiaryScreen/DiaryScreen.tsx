import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text } from 'react-native';
import { TabBarIconInterface } from '../../common/types';

const DiaryScreen = () => {
  return (
    <View>
      <Text>Welcome to your diary!</Text>
    </View>
  );
};

DiaryScreen.navigationOptions = {
  title: 'Diary',
  tabBarIcon: ({ tintColor }: TabBarIconInterface) => (
    <Ionicons name="ios-analytics" size={20} color={tintColor} />
  ),
  tabBarLabel: 'Diary',
};

export default DiaryScreen;
