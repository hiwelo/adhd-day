import { Formik, FormikProps } from 'formik';
import React from 'react';
import { Button } from 'react-native';
import * as Yup from 'yup';

import { WelcomeBlock, WelcomeTitle } from './components';
import { Paragraph } from '../Paragraph';
import { TextInput } from '../TextInput';
import { User } from '../../data/user/types';

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
});

interface WelcomeStepProps {
  onSubmit: (values: User) => void;
}

const WelcomeStep = ({ onSubmit }: WelcomeStepProps) => {
  return (
    <WelcomeBlock>
      <WelcomeTitle>Welcome! 👋</WelcomeTitle>
      <Paragraph>I'm Sam, nice to meet you!</Paragraph>
      <Paragraph>
        I am a ADHD companion. My purpose is to help you with your daily
        routines and medications.
      </Paragraph>
      <Paragraph spacing="comfortable">
        Ready? So let's start with the basics, how should I call you?
      </Paragraph>
      <Formik
        initialValues={{ name: '' }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        render={({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
        }: FormikProps<User>) => (
          <>
            <TextInput
              autoCompleteType="name"
              onBlur={handleBlur('name')}
              onChangeText={handleChange('name')}
              labelText="What's your name?"
              placeholder="Sam Doe"
              value={values.name}
            />
            <Button title="Let's start!" onPress={handleSubmit as any} />
          </>
        )}
      />
    </WelcomeBlock>
  );
};

export default WelcomeStep;
