import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  KeyboardAvoidingView,
  View,
  TextInput,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CustomArrowLeft } from '../../components/customArrow';
import { CustomInputBlack } from '../../components/customInput';
import { Logo } from '../../components/logo';
import { postUsuario } from '../../api/usuario/usuarioApi';

export default function CreateAccount() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const navigation = useNavigation();

  const signUp = () => {
    const usuarioObj = {
      nome_usuario: fullName,
      email,
      senha: password,
    };

    postUsuario(usuarioObj)
      .then((response) => {
        console.log('response', response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={50}
    >
      <ScrollView style={{ flex: 1, width: '100%' }}>
        <View style={styles.header}>
          <CustomArrowLeft onPress={() => navigation.navigate('Welcome')} text="Voltar" />
        </View>
        <View style={styles.content}>
          <Logo wid={97.83} hei={97.86} margTop={131} margBot={28.14} />
          <Text style={styles.textContent}>Vamos Pedalar?</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.inputContainer}
            value={fullName}
            onChangeText={setFullName}
            placeholder="Nome de Usuário*"
          />
          <TextInput
            style={styles.inputContainer}
            value={email}
            onChangeText={setEmail}
            placeholder="E-Mail*"
          />
          <TextInput
            style={styles.inputContainer}
            value={password}
            onChangeText={setPassword}
            placeholder="Senha*"
            secureTextEntry
          />
          <TextInput
            style={styles.inputContainer}
            value={password2}
            onChangeText={setPassword2}
            placeholder="Confirme a senha*"
            secureTextEntry
          />
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnSend} activeOpacity={0.7} onPress={() => signUp()}>
            <Text
              style={{
                textAlign: 'center',
                color: '#B9B9B9',
                fontFamily: 'Inter_400Regular',
                fontWeight: 400,
                alignItems: 'center',
              }}
            >
              Começar
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
  },
  header: {
    zIndex: 1,
    flexDirection: 'row',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  textContent: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  inputContainer: {
    width: 226,
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSend: {
    width: 226,
    backgroundColor: '#F8FFA1',
    marginTop: 18,
    marginBottom: 3,
    paddingTop: 9,
    paddingRight: 84,
    paddingBottom: 9,
    paddingLeft: 84,
    borderRadius: 15,
    elevation: 3,
  },
});
