import React from 'react';

import { Heading } from '../Heading';
import { Paragraph } from '../Paragraph';
import { Medication, MEDICATION_MODE_READABLE } from '../../data/medication';
import { Button, View } from 'react-native';

const MedicationCard = ({ medication, actions }: MedicationCardProps) => {
  return (
    <View>
      <Heading type="LargeTitle">{medication.name}</Heading>
      <Paragraph>{MEDICATION_MODE_READABLE[medication.mode]}</Paragraph>
      {actions &&
        actions.map((action: MedicationCardAction, index: number) => (
          <Button
            key={`${medication.medicationId}_${index}`}
            title={action.labelText}
            onPress={
              (() => {
                action.callback(medication.medicationId);
              }) as any
            }
          />
        ))}
    </View>
  );
};

export interface MedicationCardProps {
  medication: Medication;
  actions?: MedicationCardAction[];
}

export interface MedicationCardAction {
  labelText: string;
  callback?(medicationId: Medication['medicationId']): void;
}

export default MedicationCard;
