import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text } from 'react-native';

import { TabBarIconInterface } from '../../common/types';
import { Container } from '../../components';

const PillsScreen = () => {
  return (
    <Container>
      <Text>Test</Text>
    </Container>
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
