import { createSwitchNavigator } from 'react-navigation';

import { AppLoadingScreen, HomeScreen } from '../views';

export const GenericRoutes = createSwitchNavigator(
  {
    Home: { screen: HomeScreen },
  },
  {
    initialRouteName: 'Home',
  },
);

export const LoadingRoutes = createSwitchNavigator(
  {
    AppLoadingScreen: { screen: AppLoadingScreen },
  },
  {
    initialRouteName: 'AppLoadingScreen',
  },
);
