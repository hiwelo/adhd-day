import styled, { ComponentProps, css } from 'styled-components/native';
import { SPACING_DEFAULT, SpacingType } from '../../../../theme';

export interface TextProps extends ComponentProps {
  spacing?: SpacingType;
}

export default styled.Text(
  ({ theme, spacing = SPACING_DEFAULT }: TextProps) => css`
    margin-bottom: ${theme.spacing.block[spacing].vertical};
    font-family: ${theme.typography.copy.body.fontStack};
    font-size: 16px;
  `,
);
