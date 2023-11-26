import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from './AuthContext';
import RootStackNavigator from './navigation/RootStackNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <RootStackNavigator/>
    </AuthProvider>
  )
};
