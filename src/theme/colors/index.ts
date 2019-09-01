import neutral from './neutral';

export default { neutral };

interface ColorPalette {
  [key: string]: string;
}

export interface Colors {
  [key: string]: ColorPalette;
}
