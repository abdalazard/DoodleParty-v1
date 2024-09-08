import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function BotaoPreto({ name, onPress }) { // Adicione a prop onPress
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('Botão clicado!');
        onPress();
      }}    
      className="w-24 p-4 mb-16 bg-black rounded-full"  
    >
      <Text className="text-center text-white">{name}</Text>
    </TouchableOpacity>
  );
}
