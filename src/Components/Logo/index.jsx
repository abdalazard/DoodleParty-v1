import React from 'react';
import { Image, View, Text} from 'react-native';

export default function Logo({estilo}) {
  return (
      <View className="flex flex-col items-center mt-12 mb-10"> 
        <Text className="mb-5 text-6xl font-semibold text-center text-white">DoodleParty</Text>
        <View className="items-center">
          <Image 
            source={require('../../../assets/logo.png')} 
            className={`rounded-full ${estilo ? estilo : 'h-36 w-36'}`} 
          /> 
        </View>
      </View>
  );
}