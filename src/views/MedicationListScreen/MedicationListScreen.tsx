import React from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
  Button,
  Container,
  MedicationCard,
  MedicationCardAction,
} from '../../components';
import { removeMedication, Prescriptions } from '../../data/medication';
import Styles from '../../styles';

const MedicationListScreen = ({ navigation }: ScreenProps) => {
  const dispatch = useDispatch();
  const { medications }: Prescriptions = useSelector(
    state => state.data.medication,
  );

  const addNewMedication = () => {
    navigation.navigate('Edit');
  };

  const medicationCardActions: MedicationCardAction[] = [
    {
      labelText: 'Edit',
      callback: medication => {
        navigation.navigate('Edit', { medication });
      },
    },
    {
      labelText: 'Delete',
      callback: medication => {
        dispatch(removeMedication(medication.medicationId));
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
