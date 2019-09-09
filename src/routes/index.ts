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
    Home: HomeScreen,
    Pills: PillsScreen,
    Diary: DiaryScreen,
    Settings: SettingsScreen,
  },
  {
    initialRouteName: 'Home',
    backBehavior: 'history',
  },
);

export const BaseRoutes = createSwitchNavigator(
  {
    Loading: AppLoadingScreen,
    AppStack: AppStack,
    Welcome: WelcomeScreen,
  },
  {
    initialRouteName: 'Loading',
  },
);
