import { FormikErrors, FormikTouched } from 'formik';
import React from 'react';

import { TextInput } from '../../../components';
import {
  Medication,
  MEDICATION_MODE_ON_DEMAND,
  OnDemandMedication,
} from '../../../data/medication';
import { Text } from 'react-native';

interface OnDemandInputsProps {
  onBlur: (key: string) => void;
  onChange: (key: string) => void;
  errors?: FormikErrors<any>;
  touched?: FormikTouched<any>;
  values: OnDemandMedication | Medication;
}

const OnDemandInputs = ({
  errors,
  onBlur,
  onChange,
  touched,
  values,
}: OnDemandInputsProps) => {
  if (values.mode !== MEDICATION_MODE_ON_DEMAND) return;

  const currentValues = values as OnDemandMedication;

  if (!currentValues.configuration) {
    currentValues.configuration = {
      dailyIntake: undefined,
    };
  }

  return (
    <>
      <TextInput
        autoCompleteType="off"
        onBlur={onBlur('configuration.dailyIntake')}
        onChangeText={onChange('configuration.dailyIntake')}
        labelText="Maximum intake per day"
        placeholder="0"
        type="number"
        value={currentValues.configuration.dailyIntake}
      />
    </>
  );
};

export default OnDemandInputs;
