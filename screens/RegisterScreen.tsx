import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import { SquareButton, Logo, LinkButton } from '../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { useAuth } from '../AuthContext';

const RegisterScreen = ({navigation, route}) => {
  const { dispatch } = useAuth();
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [phone, setPhone] = useState(null);

  const handleButtonPressRegister = async () => {
    console.log("Nhấn đăng ký")
    try {
      const response = await fetch('http://192.168.1.76:8080/api/auth/register',{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        phone: phone
      }),
      });
      if (!response.ok) {
        console.error(`HTTP error! Status: ${response.status}`);
        return;
      }
      const data = await response.json();
      console.log(data.content)
      dispatch({ type: 'LOGIN', payload: data });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Logo/>  
      
      <TextInput placeholder={'Name'} value={username} onChangeText={(text) => setUsername(text)} style={styles.textInput}></TextInput> 
      <TextInput placeholder={'Email'} value={email} onChangeText={(text) => setEmail(text)} style={styles.textInput}></TextInput> 
      <TextInput placeholder={'Password'} value={password} onChangeText={(text) => setPassword(text)} style={styles.textInput}></TextInput> 
      
      <TextInput placeholder={'phone'} value={phone} onChangeText={(text) => setPhone(text)} style={styles.textInput}></TextInput> 
      <SquareButton title=" Continue " handleButtonPress={handleButtonPressRegister}  iconRight={<AntDesign name="arrowright" size={24} color="white"/>}/>
      <View style={{flexDirection:'row', justifyContent:'center', marginBottom: 16}}>
      <Text>______________________ or ______________________</Text>
      </View>
      <LinkButton onPress={() => navigation.navigate('Login')} title="Already have an account? Login here"></LinkButton>          
    </SafeAreaView>
  )
}

export default RegisterScreen

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