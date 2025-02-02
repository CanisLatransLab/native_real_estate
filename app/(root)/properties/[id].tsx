import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

function Property() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Explore {id}</Text>
    </View>
  );
}

export default Property;
