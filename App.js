import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";
import UpdateScreen from "./screens/Updates";

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home" screenOptions = {{
        headerShown : false
      }}>
        <Stack.Screen name = "Home" component = {HomeScreen}/>
        <Stack.Screen name = "Iss Location" component = {IssLocationScreen}/>
        <Stack.Screen name = "Meteor" component = {MeteorScreen}/>
        <Stack.Screen name = "Update" component = {UpdateScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

