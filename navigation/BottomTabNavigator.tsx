import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileScreen, SearchScreen, CameraScreen, ChatScreen, WatchVideo} from '../screens';
import HomeStackNavigator from './HomeStackNavigator';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  
  return (
      <Tab.Navigator>
          <Tab.Screen name="HomeStack" component={HomeStackNavigator} options={{headerShown: false}} />
          <Tab.Screen name="Camera" component={CameraScreen} /> 
          <Tab.Screen name="Chat" component={ChatScreen} />      
          <Tab.Screen name="Profile" component={ProfileScreen}/>      
    </Tab.Navigator>
  )
}

export default BottomTabNavigator