import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text } from 'react-native';
import { TabBarIconInterface } from '../../common/types';

const SettingsScreen = () => {
  return (
    <View>
      <Text>Welcome to the settings!</Text>
    </View>
  );
};

SettingsScreen.navigationOptions = {
  title: 'Settings',
  tabBarIcon: ({ tintColor }: TabBarIconInterface) => (
    <Ionicons name="ios-settings" size={20} color={tintColor} />
  ),
  tabBarLabel: 'Settings',
};

export default SettingsScreen;
