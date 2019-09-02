import 'styled-components';
import 'styled-components/native';
import { StyledProps } from 'styled-components';

import { Colors } from './colors';
import { Scale } from './scale';
import { Typography } from './typography';

interface RootAppTheme extends DefaultTheme {
  colors: Colors;
  scale: Scale;
  typography: Typography;
}

declare module 'styled-components' {
  export interface AppTheme extends RootAppTheme {}
}

declare module 'styled-components/native' {
  export interface AppTheme extends RootAppTheme {}

  export interface ComponentProps extends StyledProps {
    theme?: AppTheme;
  }
}
