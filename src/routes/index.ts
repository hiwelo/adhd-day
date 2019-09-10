import { createSwitchNavigator } from 'react-navigation';

import { AppRoutes } from './AppRoutes';

import { AppLoadingScreen, WelcomeScreen } from '../views';

export default createSwitchNavigator(
  {
    Loading: { screen: AppLoadingScreen },
    AppStack: AppRoutes,
    Welcome: { screen: WelcomeScreen },
  },
  {
    initialRouteName: 'Loading',
  },
);
