import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

export function CustomArrowLeft({ onPress, text, color }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrowButtom} onPress={onPress}>
        <Ionicons name="chevron-back" size={24} color={color} />
        <Text style={{ color }}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

export function CustomArrowRight({ onPress, text, color }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrowButtom} onPress={onPress}>
        <Text style={{ color }}>{text}</Text>
        <Ionicons name="chevron-forward" size={24} color={color} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    position: 'absolute',
    top: 37.15,
    left: 20,
  },
  arrowButtom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
