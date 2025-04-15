import {Button, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomComponets from '../components/CustomComponets';
import {colors} from '../utils/colors';

const SignupScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={colors.backGraound}
      />
      <CustomComponets
        title={'FireTask'}
        info={
          'To join our community create an account and begin your awesome journey with us!'
        }
        lable={'Create your Account'}
        email={'Enter your Email'}
        password={'Enter Password'}
        confirmPassword={'Confirm Password'}
        btnTxt={'Sign Up'}
        optionTxt={'OR SIGN UP WITH'}
        message={" have alredy an acount?"}
        messageT={'Sign in'}
        onPress={() => navigation.navigate('Signin')}

      />
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
  },
});
