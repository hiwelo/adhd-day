import { AppTheme } from 'styled-components';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

export interface ScreenPropsInterface {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export interface StyledComponentProps {
  theme?: AppTheme;
}

export interface TabBarIconInterface {
  focused?: boolean;
  horizontal?: boolean;
  tintColor?: string;
}
