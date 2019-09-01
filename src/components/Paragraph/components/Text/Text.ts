import styled, { ComponentProps, css } from 'styled-components/native';

export default styled.Text(
  ({ theme }: ComponentProps) => css`
    margin-bottom: 16px;
    font-family: ${theme.typography.copy.body.fontStack};
    font-size: 16px;
  `,
);
