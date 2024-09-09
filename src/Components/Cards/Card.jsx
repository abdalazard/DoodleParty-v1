import { View } from 'react-native';
import styles from '../../../style.jsx';
import React from 'react';

export default function Card({ children, estilo }) {
  return (
      <View style={styles.container}>
        <View className="items-center justify-center max-w-sm p-6 bg-white rounded-lg ">
            {children}
        </View>
    </View >

  );
}