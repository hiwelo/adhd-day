import React from 'react';
import { Button, View } from 'react-native';

import { Heading } from '../Heading';
import { Paragraph } from '../Paragraph';
import { Medication, MEDICATION_MODE_READABLE } from '../../data/medication';
import Styles from '../../styles';

const MedicationCard = ({ medication, actions }: MedicationCardProps) => {
  return (
    <View style={Styles.medicationCard.card}>
      <Heading type="LargeTitle">{medication.name}</Heading>
      <Paragraph>{MEDICATION_MODE_READABLE[medication.mode]}</Paragraph>
      {actions &&
        actions.map((action: MedicationCardAction, index: number) => (
          <Button
            key={`${medication.medicationId}_${index}`}
            title={action.labelText}
            onPress={
              (() => {
                action.callback(medication);
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
  callback?(medication: Medication): void;
}

export default MedicationCard;
