import styled, { ComponentProps, css } from 'styled-components/native';

export default styled.TextInput(
  ({ theme }: ComponentProps) => css`
    margin-bottom: 16px;
    padding: 24px 16px;
    width: 100%;
    border-color: ${theme.colors.neutral.n300};
    border-style: solid;
    border-radius: 4px;
    border-width: 1px;
    color: ${theme.colors.neutral.n800};
    font-size: ${theme.typography.copy.input.fontSize};
    line-height: ${theme.typography.copy.input.lineHeight};
  `,
);
