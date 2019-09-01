import {
  FONT_SIZE_DEFAULT,
  FONT_SIZE_DETAILS,
  FONT_SIZE_INPUT,
  FONT_STACK_CODE,
  FONT_STACK_DEFAULT,
  FONT_WEIGHT_REGULAR,
  FONT_WEIGHT_SEMIBOLD,
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
    fontSize: FONT_SIZE_DEFAULT,
    fontWeight: FONT_WEIGHT_REGULAR,
    lineHeight: LINE_HEIGHT_COMFORTABLE,
    letterSpacing: LETTER_SPACING_NORMAL,
  },
  code: {
    fontStack: FONT_STACK_CODE,
    fontSize: FONT_SIZE_DETAILS,
    fontWeight: FONT_WEIGHT_REGULAR,
    lineHeight: LINE_HEIGHT_COMFORTABLE,
    letterSpacing: LETTER_SPACING_NORMAL,
  },
  button: {
    fontStack: FONT_STACK_DEFAULT,
    fontSize: FONT_SIZE_DEFAULT,
    fontWeight: FONT_WEIGHT_REGULAR,
    lineHeight: LINE_HEIGHT_UNIT,
    letterSpacing: LETTER_SPACING_NORMAL,
  },
  label: {
    fontStack: FONT_STACK_DEFAULT,
    fontSize: FONT_SIZE_DETAILS,
    fontWeight: FONT_WEIGHT_SEMIBOLD,
    lineHeight: LINE_HEIGHT_MEDIUM,
    letterSpacing: LETTER_SPACING_NORMAL,
  },
  small: {
    fontStack: FONT_STACK_DEFAULT,
    fontSize: FONT_SIZE_DETAILS,
    fontWeight: FONT_WEIGHT_REGULAR,
    lineHeight: LINE_HEIGHT_BASE,
    letterSpacing: LETTER_SPACING_NORMAL,
  },
  input: {
    fontStack: FONT_STACK_DEFAULT,
    fontSize: FONT_SIZE_INPUT,
    fontWeight: FONT_WEIGHT_REGULAR,
    lineHeight: LINE_HEIGHT_COMFORTABLE,
    letterSpacing: LETTER_SPACING_NORMAL,
  },
};
