import styled, { ComponentProps, css } from 'styled-components/native';

export default styled.View(
  ({ theme }: ComponentProps) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    background: ${theme.colors.neutral.n30};
  `,
);
