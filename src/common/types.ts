import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

export interface ScreenPropsInterface {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export interface TabBarIconInterface {
  focused?: boolean;
  horizontal?: boolean;
  tintColor?: string;
}
