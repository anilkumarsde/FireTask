import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignupScreen from '../screen/SignupScreen';
import SplashScreen from '../screen/SplashScreen';
import SigninScreen from '../screen/SigninScreen';

const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>

      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="SignUp" component={SignupScreen} />
      <Stack.Screen name="Signin" component={SigninScreen} />

    </Stack.Navigator>
  );
};

export default NavigationScreen;

const styles = StyleSheet.create({});
