import 'styled-components';
import 'styled-components/native';
import { StyledProps } from 'styled-components';

import { Colors } from './colors';
import { Typography } from './typography';

declare module 'styled-components' {
  export interface AppTheme extends DefaultTheme {
    colors: Colors;
    typography: Typography;
  }
}

declare module 'styled-components/native' {
  export interface ComponentProps extends StyledProps {
    theme?: AppTheme;
  }
}
