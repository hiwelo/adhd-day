import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text } from 'react-native';
import { TabBarIconInterface } from '../../common/types';

const PillsScreen = () => {
  return (
    <View>
      <Text>Welcome to the Pills paradize!</Text>
    </View>
  );
};

PillsScreen.navigationOptions = {
  title: 'Medication',
  tabBarIcon: ({ tintColor }: TabBarIconInterface) => (
    <Ionicons name="ios-medical" size={20} color={tintColor} />
  ),
  tabBarLabel: 'Pills',
};

export default PillsScreen;
