import {
  FONT_STACK_CODE,
  FONT_STACK_DEFAULT,
  FONT_WEIGHT_REGULAR,
  FONT_WEIGHT_BOLD,
  LINE_HEIGHT_COMFORTABLE,
  LINE_HEIGHT_UNIT,
  LINE_HEIGHT_MEDIUM,
  LINE_HEIGHT_BASE,
  LETTER_SPACING_NORMAL,
  TextStylesVariation,
} from '../common/text';

export interface Copy {
  body: TextStylesVariation;
  copy: TextStylesVariation;
  button: TextStylesVariation;
  label: TextStylesVariation;
  small: TextStylesVariation;
  input: TextStylesVariation;
}

export const copy = {
  body: {
    fontStack: FONT_STACK_DEFAULT,
    fontSize: '1.4rem',
    fontWeight: FONT_WEIGHT_REGULAR,
    lineHeight: LINE_HEIGHT_COMFORTABLE,
    letterSpacing: LETTER_SPACING_NORMAL,
  },
  code: {
    fontStack: FONT_STACK_CODE,
    fontSize: '1.3rem',
    fontWeight: FONT_WEIGHT_REGULAR,
    lineHeight: LINE_HEIGHT_COMFORTABLE,
    letterSpacing: LETTER_SPACING_NORMAL,
  },
  button: {
    fontStack: FONT_STACK_DEFAULT,
    fontSize: '1.4rem',
    fontWeight: FONT_WEIGHT_REGULAR,
    lineHeight: LINE_HEIGHT_UNIT,
    letterSpacing: LETTER_SPACING_NORMAL,
  },
  label: {
    fontStack: FONT_STACK_DEFAULT,
    fontSize: '1.4rem',
    fontWeight: FONT_WEIGHT_BOLD,
    lineHeight: LINE_HEIGHT_MEDIUM,
    letterSpacing: LETTER_SPACING_NORMAL,
  },
  small: {
    fontStack: FONT_STACK_DEFAULT,
    fontSize: '1.3rem',
    fontWeight: FONT_WEIGHT_REGULAR,
    lineHeight: LINE_HEIGHT_BASE,
    letterSpacing: LETTER_SPACING_NORMAL,
  },
  input: {
    fontStack: FONT_STACK_DEFAULT,
    fontSize: '1.6rem',
    fontWeight: FONT_WEIGHT_REGULAR,
    lineHeight: LINE_HEIGHT_COMFORTABLE,
    letterSpacing: LETTER_SPACING_NORMAL,
  },
};
