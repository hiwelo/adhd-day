import { createSwitchNavigator } from 'react-navigation';

import { MedicationListScreen, MedicationEditScreen } from '../views';

export const MedicationRoutes = createSwitchNavigator(
  {
    Edit: { screen: MedicationEditScreen },
    List: { screen: MedicationListScreen },
  },
  {
    initialRouteName: 'List',
    backBehavior: 'initialRoute',
  },
);
