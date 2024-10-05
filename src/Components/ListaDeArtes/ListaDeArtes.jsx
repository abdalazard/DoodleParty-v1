import React from 'react';
import { View, Text} from 'react-native';

export default function ListaDeArtes() {
  return (
    <View> 
      <View className="border border-gray-400">
        <View className="h-52">
          {/* Conteúdo da arte */}
        </View>
        <View className="flex flex-row justify-between py-3">
          <Text className="text-white text-center ml-2">
            Vampiros Com fome no RJ
          </Text>
          <Text className="text-white text-center mr-2">
            @abdalazard
          </Text>
        </View>    
      </View>

      <View className="border border-gray-400">
        <View className="h-52">
          {/* Conteúdo da arte */}
        </View>
        <View className="flex flex-row justify-between py-3">
          <Text className="text-white text-center ml-2">
            Uma taça de vinho e uma paisagem
          </Text>
          <Text className="text-white text-center mr-2">
            @danefrida
          </Text>
        </View>
      </View>

      <View className="border border-gray-400 ">
        <View className="h-52">
          {/* Conteúdo da arte */}
        </View>
        <View className="flex flex-row justify-between py-3">
          <Text className="text-white text-center ml-2">
            Animais em cidades pós-apocalipse
          </Text>
          <Text className="text-white text-center mr-2">
            @lhuaan22
          </Text>
        </View>
      </View>
    </View> 
  );
}