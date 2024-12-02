import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/LoginScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import GreetingScreen from './src/screens/GreetingScreen';
import Otp from './src/screens/Otp';
import Password from './src/screens/Password';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Greeting">
        <Stack.Screen 
          name="Greeting" 
          component={GreetingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Registration" 
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Otp" 
          component={Otp}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Password" 
          component={Password}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;