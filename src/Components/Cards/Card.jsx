import { View } from 'react-native';
import styles from '../../../style.jsx';
import React from 'react';

export default function Card({ children }) {
  return (
      <View className="bg-grey items-center justify-center">
        <View className="p-6 bg-gray-500 border border-white rounded-lg ">
            {children}
        </View>
    </View >
  );
}