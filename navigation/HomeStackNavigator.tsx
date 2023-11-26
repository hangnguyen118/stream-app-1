import { HomeScreen, WatchVideo } from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'My home' }}/>      
      <Stack.Screen name="WatchVideo" component={WatchVideo} /> 
    </Stack.Navigator>
  )
}

export default HomeStackNavigator;