import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function MenuRoomInicio() {
  return (
      <View className="gap-3 absolute right-5 bottom-0"> 
        <TouchableOpacity className="bg-white rounded-full w-14 h-14 justify-center items-center" onPress={() => alert('A')}>
          <Text className="text-center text-black text-3xl font-light">+</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-white rounded-full w-14 h-14 justify-center items-center" onPress={() => alert('B')}>
          <Text className="text-center text-black">Criar Sala</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-white rounded-full w-14 h-14 justify-center items-center" onPress={() => alert('C')}>
          <Text className="text-center text-black">Entrar</Text>
        </TouchableOpacity>
      </View>
  );
}