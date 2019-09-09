import { createSwitchNavigator } from 'react-navigation';

import { SettingsScreen } from '../views';

export const SettingsRoutes = createSwitchNavigator(
  {
    Settings: { screen: SettingsScreen },
  },
  {
    initialRouteName: 'Settings',
  },
);
