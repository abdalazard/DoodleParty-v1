import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function BotaoPreto({ name, onPress }) { 
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      className="w-24 p-4 bg-black rounded-full border-gray-300"

    >
      <Text className="text-center text-white">{name}</Text>
    </TouchableOpacity>
  );
}
