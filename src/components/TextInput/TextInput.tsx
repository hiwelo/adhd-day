import React from 'react';
import { Keyboard } from 'react-native';

import { Input } from './components';

const TextInput = props => <Input onBlur={Keyboard.dismiss} {...props} />;

export default TextInput;
