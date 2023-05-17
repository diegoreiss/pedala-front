import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

export function CustomButtom({ onPress, text, margBot }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.container, { marginBottom: margBot }]}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EBFF00',
    width: 226,
    paddingTop: 9,
    paddingRight: 84,
    paddingBottom: 9,
    paddingLeft: 84,
    alignItems: 'center',
    borderRadius: 15,
  },
  text: {
    fontFamily: 'Inter_400Regular',
    fontWeight: 400,
    color: '#3A3A3A',
    textAlign: 'center',
    width: 160,
  },
});
