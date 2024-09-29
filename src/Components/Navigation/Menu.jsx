import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Inicio from '../../pages/Inicio';
import { useNavigation } from '@react-navigation/native';

export default function Menu() {
    const navigation = useNavigation();   

    function goesTo(screen) {
        navigation.navigate(screen); 
    }

  return (
    <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-300 flex flex-row"> 
      <TouchableOpacity className="flex-1 p-4 rounded-l-lg border-r border-gray-300" onPress={() => goesTo("Store")}> 
        <Text className="text-center">Store</Text>
      </TouchableOpacity>

      <TouchableOpacity className="flex-1 p-4 border-r border-gray-300" onPress={() => goesTo("Inicio")}> 
        <Text className="text-center">Início</Text>
      </TouchableOpacity>

      <TouchableOpacity className="flex-1 p-4 rounded-r-lg border-r border-gray-300" onPress={() => goesTo("Configuracoes")}> 
        <Text className="text-center">Configurações</Text>
      </TouchableOpacity>
    </View>
  );
}