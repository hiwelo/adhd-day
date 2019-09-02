import {
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import {
  AppLoadingScreen,
  DiaryScreen,
  HomeScreen,
  PillsScreen,
  SettingsScreen,
  WelcomeScreen,
} from './views';

const AppStack = createBottomTabNavigator(
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

export default createSwitchNavigator(
  {
    AppLoadingScreen: {
      screen: AppLoadingScreen,
    },
    AppStack,
    Welcome: {
      screen: WelcomeScreen,
    },
  },
  {
    initialRouteName: 'AppLoadingScreen',
  },
);
