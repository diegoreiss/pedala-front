import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';

export function CustomInputWhite({ value, setValue, placeholder, secureTextEntry }) {
  return (
    <View style={customInputWhiteStyles.container}>
      <TextInput
        style={customInputWhiteStyles.input}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor="#fff"
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

export function CustomInputBlack({ value, setValue, placeholder, secureTextEntry }) {
  return (
    <View style={customInputBlackStyles.container}>
      <TextInput
        style={customInputBlackStyles.input}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const customInputWhiteStyles = StyleSheet.create({
  container: {
    width: 226,
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
  },
  input: {
    color: 'white',
    paddingBottom: 8,
    width: 180,
  },
});

const customInputBlackStyles = StyleSheet.create({
  container: {
    width: 226,
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
  },
  input: {
    color: 'black',
    width: 180,
  },
});
