import 'react-navigation';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
  ScreenProps as NavigationScreenProps,
} from 'react-navigation';

declare global {
  export interface ScreenProps extends NavigationScreenProps {
    navigation?: NavigationScreenProp<NavigationState, NavigationParams>;
  }
}
