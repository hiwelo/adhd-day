import { createSwitchNavigator } from 'react-navigation';

import { WelcomeScreen } from '../views';

export const OnboardingRoutes = createSwitchNavigator(
  {
    Welcome: { screen: WelcomeScreen },
  },
  {
    initialRouteName: 'Welcome',
  },
);
