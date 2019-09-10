import { createSwitchNavigator } from 'react-navigation';

import { MedicationListScreen } from '../views';

export const MedicationRoutes = createSwitchNavigator(
  {
    List: { screen: MedicationListScreen },
  },
  {
    initialRouteName: 'List',
  },
);
