import React from 'react';
import { View, Text,TouchableOpacity} from 'react-native';

export default function MenuRoomInicio() {

  return (
    <View className="flex m-5 flex-row p-5 gap-10">
      <TouchableOpacity className="bg-white rounded-full w-10 h-10 justify-center" onPress={() => alert('A')}>
        <Text className="text-center  text-black">
            A
        </Text>
      </TouchableOpacity>        

      <TouchableOpacity className="bg-white rounded-full w-10 h-10 justify-center" onPress={() => alert('B')}>
        <Text className="text-center text-black">
            B
        </Text>
      </TouchableOpacity>    

      <TouchableOpacity className="bg-white rounded-full w-10 h-10 justify-center" onPress={() => alert('C')}>
        <Text className="text-center text-black">
            C
        </Text>
      </TouchableOpacity>    
    </View>
  );
}

