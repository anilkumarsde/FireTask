import {Dimensions, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';
import {navigate} from '../navigator/NavigationService';

const {height, width} = Dimensions.get('window');

const SplashScreen = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('SignUp');
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.Blue} />
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
