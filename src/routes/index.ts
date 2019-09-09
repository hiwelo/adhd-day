import {
  createBottomTabNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import {
  AppLoadingScreen,
  DiaryScreen,
  HomeScreen,
  PillsScreen,
  SettingsScreen,
  WelcomeScreen,
} from '../views';

export const AppStack = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Pills: { screen: PillsScreen },
    Diary: { screen: DiaryScreen },
    Settings: { screen: SettingsScreen },
  },
  {
    initialRouteName: 'Home',
    backBehavior: 'history',
  },
);

export const BaseRoutes = createSwitchNavigator(
  {
    Loading: { screen: AppLoadingScreen },
    AppStack: { screen: AppStack },
    Welcome: { screen: WelcomeScreen },
  },
  {
    initialRouteName: 'Loading',
  },
);
