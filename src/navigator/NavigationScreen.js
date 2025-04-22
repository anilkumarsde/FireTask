import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignupScreen from '../screen/SignupScreen';
import SplashScreen from '../screen/SplashScreen';
import SigninScreen from '../screen/SigninScreen';
import TodoScreen from '../screen/TodoScreen';
import AddTaskScreen from '../screen/AddTaskScreen';

const Stack = createNativeStackNavigator();

const NavigationScreen = ({user}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="SignUp" component={SignupScreen} />
      <Stack.Screen name="Todo" component={TodoScreen} />
      <Stack.Screen name='AddTask' component={AddTaskScreen}/>
    </Stack.Navigator>
  );
};

export default NavigationScreen;

const styles = StyleSheet.create({});
