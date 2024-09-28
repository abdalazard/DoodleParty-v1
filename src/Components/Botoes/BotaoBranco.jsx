import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function BotaoBranco({ name, onPress }) { 
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      className="w-24 p-4 bg-white rounded-full border border-gray-300"

    >
      <Text className="text-center text-black">{name}</Text>
    </TouchableOpacity>
  );
}
