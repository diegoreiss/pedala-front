import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { CustomInputWhite } from '../../components/customInput';
import { CustomButtom } from '../../components/customButtom';
import { CustomArrowLeft } from '../../components/customArrow';

export default function Login() {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState();
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const navigation = useNavigation();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <LinearGradient style={styles.container} colors={['#000', '#000']}>
      <ImageBackground
        style={styles.container}
        source={require('../../img/background.png')}
        blurRadius={10}
      >
        <CustomArrowLeft
          onPress={() => navigation.navigate('Welcome')}
          text="Voltar"
          color="white"
        />
        <View style={styles.loginContainer}>
          <Text style={styles.mainLoginText}>Seja bem vindo!</Text>
          <View style={styles.inputs}>
            <CustomInputWhite
              placeholder="Usuário ou e-mail"
              value={userName}
              setValue={setUsername}
            />
            <View style={styles.passwordInputView}>
              <CustomInputWhite
                placeholder="Senha"
                value={password}
                setValue={setPassword}
                secureTextEntry={!!isPasswordVisible}
              />
              <Feather
                onPress={togglePasswordVisibility}
                style={styles.passwordVisibilityIcon}
                size={20}
                name={isPasswordVisible ? 'eye' : 'eye-off'}
                color="white"
              />
            </View>
          </View>
          <CustomButtom margBot={25} text="Login" />
          <Text onPress={() => console.log('esqueci a senha')} style={styles.forgotPwd}>
            Esqueci a senha
          </Text>
          <Text style={styles.notAlreadyAcc}>Ainda não tem uma conta?</Text>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
}

const inputStyle = StyleSheet.create({
  input: {
    color: 'black',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  loginContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainLoginText: {
    color: 'white',
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    marginTop: 256,
    marginBottom: 41,
  },
  inputs: {
    gap: 10,
    marginBottom: 31,
  },
  passwordInputView: {
    position: 'relative',
    flexDirection: 'row',
  },
  passwordVisibilityIcon: {
    position: 'absolute',
    left: 195,
    top: 5,
  },
  forgotPwd: {
    color: 'white',
    fontFamily: 'Inter_700Bold',
    fontSize: 10,
    marginBottom: 32,
  },
  notAlreadyAcc: {
    width: 226,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Inter_700Bold',
    borderTopColor: 'white',
    borderTopWidth: 0.5,
    paddingTop: 10,
  },
});
