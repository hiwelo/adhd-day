import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { Button, Container } from '../../components';
import { Medication } from '../../data/medication/types';

const MedicationListScreen = ({ navigation }: ScreenProps) => {
  const { medications } = useSelector(state => state.data.medication);

  const addNewMedication = () => {
    navigation.navigate('Edit');
  };

  return (
    <Container>
      <Button onPress={addNewMedication} title="Add a new medication" />
      <FlatList
        data={medications}
        renderItem={({ item }: { item: Medication }) => (
          <Text>{item.name}</Text>
        )}
        keyExtractor={({ medicationId }) => medicationId}
      />
    </Container>
  );
};

export default MedicationListScreen;
