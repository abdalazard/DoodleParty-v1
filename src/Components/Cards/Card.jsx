import { View } from 'react-native';
import styles from '../../../style.jsx';
import React from 'react';

export default function Card({ children }) {
  return (
      <View className="bg-grey items-center justify-center">
        <View className="items-center justify-center p-6 bg-white border border-gray-300 rounded-lg ">
            {children}
        </View>
    </View >
  );
}