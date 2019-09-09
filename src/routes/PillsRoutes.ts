import { createSwitchNavigator } from 'react-navigation';

import { PillsScreen } from '../views';

export const PillsRoutes = createSwitchNavigator(
  {
    Pills: { screen: PillsScreen },
  },
  {
    initialRouteName: 'Pills',
  },
);
