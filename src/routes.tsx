import {
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import {
  HomeScreen,
  PillsScreen,
  SettingsScreen,
  WelcomeScreen,
  DiaryScreen,
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
    AppStack,
    Welcome: {
      screen: WelcomeScreen,
    },
  },
  {
    initialRouteName: 'Welcome',
  },
);
