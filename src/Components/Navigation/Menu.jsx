import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Menu({ telaAtual }) { // Recebe a prop telaAtual
  const navigation = useNavigation();

  function goesTo(screen) {
    console.log(screen)
    navigation.navigate(screen);
  }

  return (
    <View className="absolute bottom-0 left-0 right-0 flex flex-row"> 
      <TouchableOpacity 
        className={`flex-1 p-4 border-r border-gray-300 ${telaAtual === 'Home' ? 'bg-white text-black' : 'bg-black text-white'}`}
        onPress={() => goesTo("Home")}
      >
        <Text className={`text-center ${telaAtual === 'Home' ? 'text-black' : 'text-white'}`}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        className={`flex-1 p-4 border-r border-gray-300 ${telaAtual === 'MeusRegistros' ? 'bg-white text-black' : 'bg-black text-white'}`}
        onPress={() => goesTo("MeusRegistros")}
      >
        <Text className={`text-center ${telaAtual === 'MeusRegistros' ? 'text-black' : 'text-white'}`}>Meus Registros</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        className={`flex-1 p-4 border-r border-gray-300 ${telaAtual === 'Config' ? 'bg-white text-black' : 'bg-black text-white'}`}
        onPress={() => goesTo("Config")}
      >
        <Text className={`text-center ${telaAtual === 'Config' ? 'text-black' : 'text-white'}`}>Configurações</Text>
      </TouchableOpacity>
    </View>
  );
}