import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from "@react-navigation/native"; 
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import Main from "./scr/Main";
import Mol from "./scr/Mol";
import Sta from "./scr/Sta";
import Dil from "./scr/Dil";

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Main" component={Main} />
        <stack.Screen name="Mol" component={Mol} />
        <stack.Screen name="Sta" component={Sta} />
        <stack.Screen name="Dil" component={Dil} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
