import {
  createBottomTabNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import { DiaryRoutes } from './DiaryRoutes';
import { GenericRoutes, LoadingRoutes } from './GenericRoutes';
import { OnboardingRoutes } from './OnboardingRoutes';
import { PillsRoutes } from './PillsRoutes';
import { SettingsRoutes } from './SettingsRoutes';

export const AppStack = createBottomTabNavigator(
  {
    Home: GenericRoutes,
    Pills: PillsRoutes,
    Diary: DiaryRoutes,
    Settings: SettingsRoutes,
  },
  {
    initialRouteName: 'Home',
    backBehavior: 'history',
  },
);

export const BaseRoutes = createSwitchNavigator(
  {
    Loading: LoadingRoutes,
    Welcome: OnboardingRoutes,
  },
  {
    initialRouteName: 'Loading',
  },
);
