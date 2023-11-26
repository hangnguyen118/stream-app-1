import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useState, useReducer, createContext, useContext } from 'react';
import { SquareButton, Logo, LinkButton } from '../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { useAuth } from '../AuthContext';

const LoginScreen = ({ navigation }) => {
  const { dispatch } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleButtonPressLogin = async () => {
    try {
      const response = await fetch('http://192.168.1.76:8080/api/auth/login',{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        email: email,
        password: password,
      }),
      });
      if (!response.ok) {
        console.error(`HTTP error! Status: ${response.status}`);
        return;
      }
      const data = await response.json();
      dispatch({ type: 'LOGIN', payload: data });
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Logo/>
      <TextInput placeholder={'Username or Email'} value={email} onChangeText={(text) => setEmail(text)} style={styles.textInput}></TextInput> 
      <TextInput placeholder={'Password'} value={password} onChangeText={(text) => setPassword(text)} style={styles.textInput}></TextInput>   
      <SquareButton title=" Login " handleButtonPress={handleButtonPressLogin} />
      <LinkButton title="Forgot your password?"></LinkButton>
      
      <View style={{flexDirection:'row', justifyContent:'center', marginBottom: 16}}>
        <Text>______________________ or ______________________</Text>
      </View>

      <SquareButton title=" Login with Google " color="#F2F3F5" textColor="black" iconRight={<AntDesign name="google" size={24} color="#e41e3f"/>} borderWidth={1}/>
      <SquareButton title=" Login with Facebook " color="#F2F3F5" textColor="black" iconRight={<AntDesign name="facebook-square" size={24} color="#0866FF" />} borderWidth={1} />
      <View style={{marginTop: 56}}></View>
      <LinkButton title="Don't have an account? Register now" color="#1877F2" onPress={() => navigation.navigate('Register')}></LinkButton>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'white',
    flex: 1
  },
  textInput: {
    height: 48,
    borderRadius: 8,       
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
    marginTop: 6,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  }
})