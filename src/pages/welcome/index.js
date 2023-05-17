import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Logo } from '../../components/logo';
import { CustomButtom } from '../../components/customButtom';

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <LinearGradient style={styles.container} colors={['#000', '#000']}>
      <ImageBackground
        style={styles.container}
        source={require('../../img/background.png')}
        blurRadius={10}
      >
        <View style={styles.content}>
          <Logo wid={60.16} hei={60.18} margTop={30} margBot={165.82} />
          <View style={styles.mainText}>
            <Text style={styles.mainText1}>Um App feito de</Text>
            <Text style={styles.mainText2}>Ciclista para Ciclistas</Text>
          </View>
        </View>

        <View style={styles.loginWith}>
          <TouchableOpacity activeOpacity={0.6}>
            <Image source={require('../../img/login-facebook.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../img/login-google.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttoms}>
          <CustomButtom
            onPress={() => navigation.navigate('CreateAccount')}
            margBot={35}
            text="Inscreva-se com e-mail"
          />
          <Text style={styles.lineText}>Já sou membro</Text>
          <CustomButtom onPress={() => navigation.navigate('Login')} text="Login" />
        </View>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  content: {
    alignItems: 'center',
  },
  mainText: {
    alignItems: 'center',
  },
  mainText1: {
    color: 'white',
    fontFamily: 'Inter_400Regular',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 29.05,
  },
  mainText2: {
    color: 'white',
    fontFamily: 'Inter_700Bold',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 29.05,
    marginBottom: 54,
  },
  loginWith: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 17,
    marginBottom: 30,
  },
  buttoms: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineText: {
    width: 226,
    color: 'white',
    textAlign: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
    paddingBottom: 8,
    marginBottom: 21,
  },
});
