import styled, { ComponentProps, css } from 'styled-components/native';

export default styled.SafeAreaView(
  ({ theme }: ComponentProps) => css`
    margin-left: ${theme.spacing.block.default.horizontal};
    margin-right: ${theme.spacing.block.default.horizontal};
  `,
);
