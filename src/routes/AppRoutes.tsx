import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { createBottomTabNavigator, TabBarIconProps } from 'react-navigation';

import { MedicationRoutes } from './MedicationRoutes';
import { HomeScreen, DiaryScreen, SettingsScreen } from '../views';

export const AppRoutes = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Medication: MedicationRoutes,
    Diary: { screen: DiaryScreen },
    Settings: { screen: SettingsScreen },
  },
  {
    initialRouteName: 'Home',
    backBehavior: 'history',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }: TabBarIconProps) => {
        const { routeName } = navigation.state;
        let iconName;

        switch (routeName) {
          case 'Home':
            iconName = 'today';
            break;

          case 'Medication':
            iconName = 'medical';
            break;

          case 'Diary':
            iconName = 'analytics';
            break;

          case 'Settings':
            iconName = 'settings';
            break;
        }

        return (
          <Ionicons name={`ios-${iconName}`} size={20} color={tintColor} />
        );
      },
    }),
    swipeEnabled: true,
    tabBarOptions: {
      showIcon: true,
    },
  },
);
