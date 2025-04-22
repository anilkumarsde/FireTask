import {Dimensions, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import StatusbarComponent from '../components/StatusbarComponent';

const {height, width} = Dimensions.get('window');

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const checkFirstTime = async () => {
      const isFirstTime = await AsyncStorage.getItem('alreadyLaunched');
      console.log(isFirstTime, 'dfjsjdjd');
      setTimeout(() => {
        if (isFirstTime === null) {
          AsyncStorage.setItem('alreadyLaunched', 'true');
          navigation.replace('SignUp');
        } else {
          navigation.replace('Todo');
        }
      }, 5000);
    };
    checkFirstTime();
  }, []);

  return (
    <View style={styles.container}>
      {/* <StatusBar barStyle={'light-content'} backgroundColor={colors.Blue} /> */}
      <StatusbarComponent
        barStyle={'light-content'}
        backgroundColor={colors.Blue}
      />
      <Text style={styles.splashTxt}>FireTask</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashTxt: {
    fontSize: width * 0.12,
    color: colors.White,
    fontFamily: fonts.RobotoExtraBold,
  },
});
