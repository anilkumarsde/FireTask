import {
  Alert,
  Button,
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';
import InputComponet from '../components/InputComponet';
import CustomBtn from '../components/CustomBtn';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import StatusbarComponent from '../components/StatusbarComponent';

const {height, width} = Dimensions.get('window');

const SignupScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '1043023854865-c4pba0nqcgrosbooprd54m34r62v1juu.apps.googleusercontent.com',
    });
  }, []);

  //  signup with email and password

  const handleSignUp = async (email, password) => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Please fill all fields');
      return;
    }

    try {
      await auth().createUserWithEmailAndPassword(email, password);
      await AsyncStorage.setItem('alreadyLaunched', 'true');
      navigation.replace('Todo');
    } catch (error) {
      Alert.alert('Signup Error', error.message);
    }
  };

  // signup with google account

  // const handleGoogleSignUp = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const {idToken} = await GoogleSignin.signIn();
  //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  //     await auth().signInWithCredential(googleCredential);
  //     await AsyncStorage.setItem('alreadyLaunched', 'true');
  //     navigation.replace('Todo');
  //   } catch (error) {
  //     console.error('Google Sign-Up Error:', error);
  //   }
  // };

  return (
    <View style={styles.container}>
      <StatusbarComponent
        barStyle={'dark-content'}
        backgroundColor={colors.White}
      />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name={'arrow-back'} size={25} />
      </TouchableOpacity>
      <View style={styles.titleWrapper}>
        <Text style={styles.titleTxt}>FireTask</Text>
      </View>
      <Text style={styles.labelTxt}>Create Your Account</Text>
      <InputComponet
        placeholder={'Enter Email'}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <InputComponet
        placeholder={'Enter Password'}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <InputComponet
        placeholder={'Enter Confirm Password'}
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
      />
      <CustomBtn
        btnTxt={'SignUp'}
        onPress={() => handleSignUp(email, password)}
      />

      <View style={styles.otherOptionWrapper}>
        <View style={styles.mark} />
        <Text style={styles.optionText}>Or sign up with</Text>
        <View style={styles.mark} />
      </View>

      <View style={styles.logoWrapper}>
        <TouchableOpacity
          style={styles.Logo}
          onPress={() => handleGoogleSignUp()}>
          <Image
            source={require('../utils/images/search.png')}
            style={styles.LogoImg}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.Logo}>
          <Image
            source={require('../utils/images/facebook.png')}
            style={styles.LogoImg}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.Logo}>
          <Image
            source={require('../utils/images/twitter.png')}
            style={styles.LogoImg}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
    // marginHorizontal: width * 0.05,
    paddingHorizontal: width * 0.05,
  },
  titleWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.06,
    marginBottom: height * 0.03,
  },
  titleTxt: {
    fontSize: width * 0.092,
    color: colors.Blue,
    alignSelf: 'flex-start',
    // marginLeft: '5%',
    fontFamily: fonts.MontserratBold,
  },
  labelTxt: {
    fontSize: width * 0.06,
    fontFamily: fonts.RobotoMedium,
    color: 'rgba(0,0,0,0.8)',
    marginBottom: height * 0.01,
    letterSpacing: 1.3,
  },
  labelDesc: {
    fontSize: width * 0.035,
    fontFamily: fonts.RobotoMedium,
    color: 'rgba(0,0,0,0.5)',
    marginBottom: height * 0.005,
    // fontFamily:fonts.MontserratMedium,
    lineHeight: 15,
    letterSpacing: 1.3,
  },
  otherOptionWrapper: {
    marginTop: height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 2,
  },
  optionText: {
    marginHorizontal: width * 0.01,
    fontSize: width * 0.038,
  },
  mark: {
    width: width * 0.022,
    height: height * 0.0017,
    backgroundColor: colors.Black,
    // borderWidth: width * 0.0015,
  },
  logoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: width * 0.1,
    justifyContent: 'space-between',
  },
  Logo: {
    backgroundColor: colors.White,
    borderWidth: 0.5,
    borderColor: colors.White,
    borderRadius: width * 0.015,
    height: 45,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1.5,
  },
  LogoImg: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
});
