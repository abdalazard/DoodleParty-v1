import React from 'react';
import { View, Text, FlatList } from 'react-native';

const data = [
  {
    id: '1',
    titulo: 'Vampiros com fome no RJ',
    autor: '@abdalazard',
  },
  {
    id: '2',
    titulo: 'Uma taça de vinho e uma paisagem',
    autor: '@danefrida',
  },
  {
    id: '3',
    titulo: 'Animais em cidades pós-apocalipse',
    autor: '@lhuaan22',
  },
  {
    id: '4',
    titulo: 'Animais em cidades pós-apocalipse',
    autor: '@lhuaan22',
  },
];

export default function ListaDeArtes() {
  const renderItem = ({ item }) => (
    <View className="border border-gray-400">
      <View className="h-52">
      </View>
      <View className="flex flex-row justify-between py-3">
        <Text className="text-white text-center ml-2">{item.titulo}</Text>
        <Text className="text-white text-center mr-2">{item.autor}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      className="border border-gray-400 mb-2 h-[480px]"
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}