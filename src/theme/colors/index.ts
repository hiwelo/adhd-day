import neutral from './neutral';
import primary from './primary';
import secondary from './secondary';
import tertiary from './tertiary';

export default { neutral, primary, secondary, tertiary };

interface ColorPalette {
  [key: string]: string;
}

interface SemanticPalette {
  main: string;
  inverted: string;
}

export interface Colors {
  neutral: ColorPalette;
  primary: SemanticPalette;
  secondary: SemanticPalette;
  tertiary: SemanticPalette;
}
