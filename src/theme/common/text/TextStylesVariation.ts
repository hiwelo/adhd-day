import { LetterSpacing } from './letterspacing';
import { LineHeight } from './lineheight';
import { FontSize } from './size';
import { FontStack } from './stack';
import { FontWeight } from './weight';

export interface TextStylesVariation {
  fontStack: FontStack;
  fontSize: FontSize;
  fontWeight: FontWeight;
  lineHeight: LineHeight;
  letterSpacing: LetterSpacing;
}
