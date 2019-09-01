import React, { useState } from 'react';
import { Button } from 'react-native';

import { WelcomeBlock, WelcomeTitle } from './components';
import { WelcomeStepConfigurationCallback } from './types';
import { Paragraph } from '../Paragraph';
import { TextInput } from '../TextInput';

type WelcomeStepProps = {
  submitCallback: WelcomeStepConfigurationCallback;
};

const WelcomeStep = ({ submitCallback }: WelcomeStepProps) => {
  const [name, setName] = useState(undefined);

  /**
   * Completes the Welcome step by calling requested callback and redirects the
   * user to the home screen
   */
  const completeStep = () => {
    submitCallback({ name });
  };

  return (
    <WelcomeBlock>
      <WelcomeTitle>Welcome! 👋</WelcomeTitle>
      <Paragraph>I'm Sam, nice to meet you!</Paragraph>
      <Paragraph>
        I am a ADHD companion. My purpose is to help you with your daily
        routines and medications.
      </Paragraph>
      <Paragraph>
        Ready? So let's start with the basics, how should I call you?
      </Paragraph>
      <TextInput
        autoCompleteType="name"
        onChange={event => setName(event.nativeEvent.text)}
        placeholder="What's your name?"
      />
      <Button title="Let's start!" onPress={() => completeStep()} />
    </WelcomeBlock>
  );
};

export default WelcomeStep;
