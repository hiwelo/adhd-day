import { createStackNavigator } from 'react-navigation';
import { HomeScreen, SettingsScreen } from './views';

export default createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
  }, {
    initialRouteName: 'Home',
  }
);
