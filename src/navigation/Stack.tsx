import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Notifications from '../screens/Notifications';
import Settings from '../screens/Settings';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export function HomeStack() {
  return (
    <Tab.Navigator
     
    >
      <Tab.Screen name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#4feb34',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      <Tab.Screen name="Notifications" component={Notifications} 
       options={{
          title: 'Notifications',
          headerStyle: {
            backgroundColor: '#4feb34',
          }
          ,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
          />
      <Tab.Screen name="Settings" component={Settings}  
        options={{
          title: 'Settings',
          headerStyle: {
            backgroundColor: '#4feb34',
          }
          ,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
      <Tab.Screen name="Profile" component={Profile} 
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#4feb34',
          }
          ,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
    </Tab.Navigator>
  );
}
