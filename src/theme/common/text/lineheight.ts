export const LINE_HEIGHT_UNIT = 1;
export const LINE_HEIGHT_NARROW = 1.15;
export const LINE_HEIGHT_BASE = 1.33;
export const LINE_HEIGHT_MEDIUM = 1.42;
export const LINE_HEIGHT_COMFORTABLE = 1.5;

export type LineHeight =
  | typeof LINE_HEIGHT_BASE
  | typeof LINE_HEIGHT_COMFORTABLE
  | typeof LINE_HEIGHT_MEDIUM
  | typeof LINE_HEIGHT_NARROW
  | typeof LINE_HEIGHT_UNIT;
