import React from 'react';
import { View, Text } from 'react-native';

const SettingsScreen = () => {
  return (
    <View>
      <Text>Welcome to the settings!</Text>
    </View>
  );
};

SettingsScreen.navigationOptions = {
  title: 'Settings'
};

export default SettingsScreen;
