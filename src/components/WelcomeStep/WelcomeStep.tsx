import React, { useState } from 'react';
import { Button } from 'react-native';

import { WelcomeTitle } from './components';
import TextInput from '../TextInput';
import { User as UserInterface } from '../../data/user/types';

interface WelcomeStep {
  submitCallback: WelcomeStepConfigurationCallback;
}

interface WelcomeStepConfigurationCallback {
  (payload?: UserInterface): any;
}

const WelcomeStep = ({ submitCallback }: WelcomeStep) => {
  const [name, setName] = useState('');

  /**
   * Completes the Welcome step by calling requested callback and redirects the
   * user to the home screen
   */
  const completeStep = () => {
    submitCallback({ name });
  };

  return (
    <>
      <WelcomeTitle>Welcome! I&apos;m Sam, nice to meet you!</WelcomeTitle>
      <TextInput
        autoCompleteType="name"
        onChange={event => setName(event.nativeEvent.text)}
        placeholder="What's your name?"
      />
      <Button title="Let's start!" onPress={() => completeStep()} />
    </>
  );
};

export default WelcomeStep;
