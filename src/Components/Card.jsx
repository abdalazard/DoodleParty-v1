import { View } from 'react-native';
import styles from '../../style.jsx';
import React from 'react';

export default function Card({ children, estilo }) {
  return (
      <View style={styles.container}>
        <View className="items-center justify-center max-w-sm p-6 bg-black rounded-lg ">
            {children}
        </View>
    </View >

  );
}