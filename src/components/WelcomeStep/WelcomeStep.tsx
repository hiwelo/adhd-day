import { Formik, FormikProps } from 'formik';
import React from 'react';
import { Button } from 'react-native';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { WelcomeBlock, WelcomeTitle } from './components';
import { Paragraph } from '../Paragraph';
import { TextInput } from '../TextInput';
import { setUser } from '../../data/user/actions';
import { User } from '../../data/user/types';

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
});

const WelcomeStep = () => {
  const dispatch = useDispatch();

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
      <Formik
        initialValues={{ name: '' }}
        validationSchema={validationSchema}
        onSubmit={(values: User) => {
          if (!values.name) return;

          dispatch(setUser(values));
        }}
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
