import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen, RegisterScreen } from '../screens';
import { useAuth } from '../AuthContext';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();
const RootStackNavigator = () => {
const { state } = useAuth();    
  return (
    <NavigationContainer>
        <Stack.Navigator>        
            { state.isAuthenticated ? 
            (
                <Stack.Screen name="BottomTab" component={BottomTabNavigator} options={{headerShown: false}}/>
            ) : (
            <>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />              
            </>
          )
        }  
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootStackNavigator;

