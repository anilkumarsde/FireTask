import React, {use, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationScreen from './src/navigator/NavigationScreen';
import {navigationRef} from './src/navigator/NavigationService';


const App = () => {

  return (
    <NavigationContainer ref={navigationRef}>
      <NavigationScreen  />
    </NavigationContainer>
  );
};

export default App;
