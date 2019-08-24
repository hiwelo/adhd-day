import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from 'react-navigation';

/**
 * Describes basic props for any component rendering a screen in this application
 */
export interface ScreenPropsInterface {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
