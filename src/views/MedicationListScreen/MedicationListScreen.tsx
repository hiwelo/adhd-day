import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { Button, Container } from '../../components';
import { Medication } from '../../data/medication/types';

const addNewMedication = () => {};

const MedicationListScreen = () => {
  const { medications } = useSelector(state => state.data.medication);

  return (
    <Container>
      <Button onPress={addNewMedication} title="Add a new medication" />
      <FlatList
        data={medications}
        renderItem={({ item }: { item: Medication }) => <>{item.name}</>}
        keyExtractor={item => item.medicationId}
      />
    </Container>
  );
};

export default MedicationListScreen;
