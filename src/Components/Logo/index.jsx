import React from 'react';
import { Image, View} from 'react-native';

export default function Logo() {

  return (
    <View>
      <Image source={require('../../../assets/logo.png')} style={{width:200, height: 150, marginTop: 100, borderRadius: 100}} /> 
    </View>
  );
}