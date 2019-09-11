import styled, { ComponentProps, css } from 'styled-components/native';

export default styled.Button(
  ({ theme }: ComponentProps) => css`
    border-radius: ${theme.scale.demi};
  `,
);
