import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function BotaoBranco({ name, onPress }) { // Adicione a prop onPress
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('Botão clicado!');
        onPress();
      }}
      className="w-24 p-4 bg-white rounded-full"

    >
      <Text className="text-center text-black">{name}</Text>
    </TouchableOpacity>
  );
}
