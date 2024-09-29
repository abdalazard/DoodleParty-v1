import React from 'react';
import { Image, View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Logo() {
  const navigation = useNavigation();   

  function goesTo(screen) {
      navigation.navigate(screen); 
  }
  return (
    <View>
      <View className="flex flex-col items-center mt-12 mb-10 "> 
        <TouchableOpacity onPress={() => goesTo("Inicio")}>
          {/* <Text className=" self-end m-2 mr-6 text-zinc-600">No matter where</Text> */}
          <Text className="mb-5 text-6xl font-semibold text-center text-white border border-white p-4">DoodleParty</Text>
          <View className="items-center">
            {/* <Image source={require('../../../assets/logo.png')} className="rounded-full w-36 h-36"/>  */}
          </View>
        </TouchableOpacity>
    </View>
    </View>
  );
}