import { Formik, FormikProps } from 'formik';
import { SegmentedControlButton, Switcher } from 'nachos-ui';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Text } from 'react-native';
import * as Yup from 'yup';

import { OnDemandInputs } from './components';
import { Button, Container, TextInput, Label } from '../../components';
import {
  addMedication,
  MEDICATION_MODE_FIXED,
  MEDICATION_MODE_INTERVAL,
  MEDICATION_MODE_ON_DEMAND,
  Medication,
  updateMedication,
} from '../../data/medication';

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  mode: Yup.mixed()
    .oneOf([
      MEDICATION_MODE_FIXED,
      MEDICATION_MODE_INTERVAL,
      MEDICATION_MODE_ON_DEMAND,
    ])
    .required(),
});

const MedicationEditScreen = ({ navigation }: ScreenProps) => {
  const medication = navigation.getParam('medication', { name: undefined });
  const isNewMedication = !medication.name;
  const dispatch = useDispatch();

  const onSubmit = (values: Medication) => {
    if (isNewMedication) {
      dispatch(addMedication(values));
    } else {
      dispatch(updateMedication(values));
    }

    navigation.navigate('List');
  };

  return (
    <Container>
      <Text>{isNewMedication ? 'Add' : 'Edit'} medication</Text>
      <Formik
        initialValues={medication}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        render={({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          touched,
          values,
        }: FormikProps<Medication>) => (
          <>
            <TextInput
              onBlur={handleBlur('name')}
              onChangeText={handleChange('name')}
              labelText="What's the medication name?"
              placeholder="Medication name"
              value={values.name}
              error={touched.name && errors.name}
            />
            <Label>Intake mode:</Label>
            <Switcher onChange={handleChange('mode')} direction="row">
              <SegmentedControlButton value="on-demand" text="On demand" />
              <SegmentedControlButton value="interval" text="Interval" />
              <SegmentedControlButton value="fixed" text="Fixed" />
            </Switcher>
            {errors.mode && touched.mode && <Text>Error: {errors.mode}</Text>}
            {values.mode === MEDICATION_MODE_ON_DEMAND && (
              <OnDemandInputs
                errors={errors}
                onBlur={handleBlur}
                onChange={handleChange}
                values={values}
              />
            )}
            <Button
              title={`${isNewMedication ? 'Add' : 'Edit'} this medication`}
              onPress={handleSubmit as any}
            />
            <Button title="Go back" onPress={() => navigation.goBack()} />
          </>
        )}
      />
    </Container>
  );
};

export default MedicationEditScreen;
