import scale from '../scale';

export default {
  default: {
    base: scale.base,
    horizontal: scale.small,
    vertical: scale.base,
  },
  condensed: {
    base: scale.demi,
    horizontal: scale.base,
    vertical: scale.demi,
  },
  comfortable: {
    base: scale.small,
    horizontal: scale.medium,
    vertical: scale.small,
  },
  none: {
    base: 0,
    horizontal: 0,
    vertical: 0,
  },
};

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
