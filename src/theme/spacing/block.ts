import scale from '../scale';

export const SPACING_DEFAULT = 'default';
export const SPACING_CONDENSED = 'condensed';
export const SPACING_COMFORTABLE = 'comfortable';
export const SPACING_NONE = 'none';

export default {
  default: {
    base: scale.small,
    horizontal: scale.medium,
    vertical: scale.small,
  },
  condensed: {
    base: scale.base,
    horizontal: scale.small,
    vertical: scale.base,
  },
  comfortable: {
    base: scale.medium,
    horizontal: scale.large,
    vertical: scale.medium,
  },
  none: {
    base: 0,
    horizontal: 0,
    vertical: 0,
  },
};

export type SpacingType =
  | typeof SPACING_COMFORTABLE
  | typeof SPACING_CONDENSED
  | typeof SPACING_DEFAULT
  | typeof SPACING_NONE;

export interface SpacingBlock {
  default: BlockItems;
  condensed: BlockItems;
  comfortable: BlockItems;
  none: BlockItems;
}

interface BlockItems {
  base: number;
  horizontal: number;
  vertical: number;
}
