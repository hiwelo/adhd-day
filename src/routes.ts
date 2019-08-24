import { createStackNavigator } from 'react-navigation';
import { HomeScreen, SettingsScreen, WelcomeScreen } from './views';

import { isAppConfigured } from './utilities';

export default createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Settings: {
      screen: SettingsScreen
    },
    Welcome: {
      screen: WelcomeScreen
    }
  },
  {
    initialRouteName: isAppConfigured() ? 'Home' : 'Welcome',
    headerMode: 'none'
  }
);
