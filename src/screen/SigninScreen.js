import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';
import CustomComponets from '../components/CustomComponets';

const {height, width} = Dimensions.get('window');

const SigninScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.White} />
      <CustomComponets
        title={'FireTask'}
        info={
          'To join our community sign in account and begin your awesome journey with us!'
        }
        lable={'Login to your Account'}
        email={'Enter Your Email'}
        password={'Enter Password'}
        confirmPassword={'Confirm Password'}
        btnTxt={'Sign in'}
        optionTxt={'OR SIGN IN WITH'}
        message={"Dont't have an acount?"}
        messageT={'Sign Up'}
        onPress={() => navigation.navigate('SignUp')}
      />

      {/* signUp option */}
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
  },
  signinWrapper: {
    marginHorizontal: width * 0.05,
    flexDirection: 'row',
  },
});
