import React from 'react';
import { Image, View, Text} from 'react-native';

export default function Logo() {

  return (
    <View>
      <View className="flex flex-col items-center w-full mt-12 mb-10"> 
        <Text className="self-end m-2 mr-6 text-zinc-600">No matter where</Text>
        <Text className="mb-5 text-6xl font-semibold text-center text-white">DoodleParty</Text>
        <View className="items-center">
          <Image source={require('../../../assets/logo.png')} className="rounded-full w-36 h-36"/> 
        </View>
    </View>
    </View>
  );
}