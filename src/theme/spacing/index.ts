import block, { SpacingBlock } from './block';

export {
  SPACING_COMFORTABLE,
  SPACING_CONDENSED,
  SPACING_DEFAULT,
  SPACING_NONE,
  SpacingType,
} from './block';

export default { block };

export interface Spacing {
  block: SpacingBlock;
}
