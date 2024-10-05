import React from 'react';
import { View, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ListaDeArtes from '../ListaDeArtes/ListaDeArtes';

export default function Game() {

  return (
    <View>
      <ListaDeArtes />
    </View>
  );
}