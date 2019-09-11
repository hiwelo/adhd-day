import React, { useRef, useState } from 'react';
import { Keyboard, Text } from 'react-native';

import { Input } from './components';
import { Label } from '../Label';

const TextInput = ({ labelText, error, ...others }: TextInputProps) => {
  const inputElement = useRef();
  const [focus, setFocus] = useState();

  const onBlur = () => {
    Keyboard.dismiss();
    setFocus(false);
  };

  return (
    <>
      {labelText && <Label>{labelText}</Label>}
      <Input
        isFocused={focus}
        ref={inputElement}
        onFocus={() => setFocus(true)}
        onBlur={() => onBlur()}
        {...others}
      />
      {error && <Text>{error}</Text>}
    </>
  );
};

interface TextInputProps {
  /**
   * Specify a label of this input
   */
  labelText?: string;

  /**
   * Specify the error message to display
   */
  error?: string;

  /**
   * Specify a series of properties applied to the final input
   */
  [property: string]: any;
}

export default TextInput;
