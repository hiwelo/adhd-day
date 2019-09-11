import { Formik, FormikProps } from 'formik';
import { SegmentedControlButton, Switcher } from 'nachos-ui';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Text } from 'react-native';

import { OnDemandInputs } from './components';
import { Button, Container, TextInput, Label } from '../../components';
import {
  addMedication,
  MEDICATION_MODE_ON_DEMAND,
  Medication,
  updateMedication,
} from '../../data/medication';

interface MedicationEditScreenProps extends ScreenProps {
  medication?: Medication;
}

const MedicationEditScreen = ({
  medication,
  navigation,
}: MedicationEditScreenProps) => {
  const currentMedication = medication || { name: undefined };
  const dispatch = useDispatch();

  const onSubmit = (values: Medication) => {
    if (medication) {
      dispatch(updateMedication(values));
    } else {
      dispatch(addMedication(values));
    }

    navigation.navigate('List');
  };

  return (
    <Container>
      <Text>Add medication</Text>
      <Formik
        initialValues={currentMedication}
        onSubmit={onSubmit}
        render={({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
        }: FormikProps<Medication>) => (
          <>
            <TextInput
              autoCompleteType="name"
              onBlur={handleBlur('name')}
              onChangeText={handleChange('name')}
              labelText="What's the medication name?"
              placeholder="Medication name"
              value={values.name}
            />
            <Label>Intake mode:</Label>
            <Switcher onChange={handleChange('mode')} direction="row">
              <SegmentedControlButton value="on-demand" text="On demand" />
              <SegmentedControlButton value="interval" text="Interval" />
              <SegmentedControlButton value="fixed" text="Fixed" />
            </Switcher>
            {values.mode === MEDICATION_MODE_ON_DEMAND && (
              <OnDemandInputs
                onBlur={handleBlur}
                onChange={handleChange}
                values={values}
              />
            )}
            <Button
              title={`${medication ? 'Edit' : 'Add'} this medication`}
              onPress={handleSubmit as any}
            />
          </>
        )}
      />
    </Container>
  );
};

export default MedicationEditScreen;
