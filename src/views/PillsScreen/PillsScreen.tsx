import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Button } from 'react-native';
import Permissions from 'expo-permissions';

import { askPermission, scheduleNotification } from '../../common';
import { TabBarIconInterface } from '../../common/types';

const PillsScreen = () => {
  const triggerNotification = async () => {
    const notificationPermission = await askPermission(
      Permissions.NOTIFICATIONS,
    );

    // early-termination if permission not granted
    if (notificationPermission !== Permissions.PermissionStatus.GRANTED) {
      return;
    }

    let sendWithDelay = Date.now();
    sendWithDelay += 5000;

    scheduleNotification(
      {
        title: 'Hello Notifications!',
        body: 'This is a test!',
        ios: {
          sound: false,
        },
      },
      { time: sendWithDelay },
    );
  };

  return (
    <View>
      <Text>Welcome to the Pills paradize!</Text>
      <Text>This page will be used to keep track of your medicine.</Text>
      <Text>At the moment, we are mainly testing notifications with it.</Text>
      <Button
        title="Trigger notification"
        onPress={() => triggerNotification()}
      />
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
