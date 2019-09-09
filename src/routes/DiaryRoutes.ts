import { createSwitchNavigator } from 'react-navigation';

import { DiaryScreen } from '../views';

export const DiaryRoutes = createSwitchNavigator(
  {
    Diary: { screen: DiaryScreen },
  },
  {
    initialRouteName: 'Diary',
  },
);
