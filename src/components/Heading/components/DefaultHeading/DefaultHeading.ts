import styled, { ComponentProps, css } from 'styled-components/native';
import { TextProps } from 'react-native';

import { SPACING_DEFAULT, SpacingType } from '../../../../theme';
import { FONT_STACK_DEFAULT } from '../../../../theme/common/text';

export interface DefaultHeadingProps extends ComponentProps {
  spacing?: SpacingType;
}

export default styled.Text(
  ({
    theme,
    spacing = SPACING_DEFAULT,
  }: DefaultHeadingProps & TextProps) => css`
    margin-bottom: ${theme.spacing.block[spacing].vertical};
    font-family: ${FONT_STACK_DEFAULT};
  `,
);
