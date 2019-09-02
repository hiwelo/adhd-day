import styled, { ComponentProps, css } from 'styled-components/native';

export default styled.View(
  ({ theme }: ComponentProps) => css`
    flex: 1;
    justify-content: center;
    background: ${theme.colors.neutral.n10};
  `,
);
