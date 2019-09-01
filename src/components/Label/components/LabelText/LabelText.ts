import styled, { ComponentProps, css } from 'styled-components/native';

export default styled.Text(
  ({ theme }: ComponentProps) => css`
    color: ${theme.colors.neutral.n900};
    margin-bottom: 8px;
    font-size: ${theme.typography.copy.label.fontSize};
    font-weight: ${theme.typography.copy.label.fontWeight};
  `,
);
