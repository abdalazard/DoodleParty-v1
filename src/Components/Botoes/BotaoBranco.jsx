import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function BotaoBranco({ name, onPress,  }) { 
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      className="p-4 bg-white rounded-xl border border-gray-300"
    >
      <Text className="text-center text-black pl-20 pr-20">{name}</Text>
    </TouchableOpacity>
  );
}
