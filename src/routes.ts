import { createStackNavigator } from 'react-navigation';
import { HomeScreen } from './views';

export default createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
  }, {
    initialRouteName: 'Home',
  }
);
