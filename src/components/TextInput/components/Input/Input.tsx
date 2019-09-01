import styled, { ComponentProps, css } from 'styled-components/native';

interface TextInputProps extends ComponentProps {
  isFocused?: boolean;
}

export default styled.TextInput(
  ({ theme, isFocused }: TextInputProps) => css`
    margin-bottom: 16px;
    padding: 8px 16px;
    width: 100%;
    background: ${theme.colors.neutral.n20};
    border-color: ${theme.colors.neutral.n100};
    border-style: solid;
    border-radius: 4px;
    border-width: 1px;
    color: ${theme.colors.neutral.n800};
    font-size: ${theme.typography.copy.input.fontSize};

    ${isFocused &&
      css`
        border-color: rebeccapurple;
      `}
  `,
);
