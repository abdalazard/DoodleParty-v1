import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function BotaoCinza({ name, onPress }) { 
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      className="p-4 bg-gray-200 rounded-xl border-gray-300"
    >
      <Text className="text-center text-gray-500 font-medium text-xl pl-20 pr-20">{name}</Text>
    </TouchableOpacity>
  );
}
