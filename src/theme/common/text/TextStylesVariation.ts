import { LetterSpacing } from './letterspacing';
import { LineHeight } from './lineheight';
import { FontStack } from './stack';
import { FontWeight } from './weight';

export interface TextStylesVariation {
  fontStack: FontStack;
  fontSize: string;
  fontWeight: FontWeight;
  lineHeight: LineHeight;
  letterSpacing: LetterSpacing;
}
