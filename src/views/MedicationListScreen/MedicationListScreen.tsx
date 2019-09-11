import React from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
  Button,
  Container,
  MedicationCard,
  MedicationCardAction,
} from '../../components';
import {
  removeMedication,
  Medication,
  Prescriptions,
} from '../../data/medication';

const MedicationListScreen = ({ navigation }: ScreenProps) => {
  const dispatch = useDispatch();
  const { medications }: Prescriptions = useSelector(
    state => state.data.medication,
  );

  const addNewMedication = () => {
    navigation.navigate('Edit');
  };

  const deleteMedication = (medicationId: Medication['medicationId']) => {
    dispatch(removeMedication(medicationId));
  };

  const medicationCardActions: MedicationCardAction[] = [
    {
      labelText: 'Delete',
      callback: medicationId => {
        deleteMedication(medicationId);
      },
    },
  ];

  return (
    <Container>
      <Button onPress={addNewMedication} title="Add a new medication" />
      {medications && (
        <FlatList
          data={medications}
          renderItem={({ item }) => (
            <MedicationCard
              key={item.medicationId}
              medication={item}
              actions={medicationCardActions}
            />
          )}
          keyExtractor={({ medicationId }) => medicationId}
        />
      )}
    </Container>
  );
};

export default MedicationListScreen;
