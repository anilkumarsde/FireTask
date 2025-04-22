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
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import StatusbarComponent from '../components/StatusbarComponent';

const {height, width} = Dimensions.get('window');

const SigninScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId:
  //       '439065968907-q98105tgsd68jfp9gb62qii5jio5e05u.apps.googleusercontent.com',
  //   });
  // }, []);

  // handlesignIn with email and password
  const handleSignIn = async (email, password) => {
    if (!email || !password) {
      Alert.alert('Please fill all fields');
      return;
    }

    try {
      await auth().signInWithEmailAndPassword(email, password);
      await AsyncStorage.setItem('alreadyLaunched', 'true');
      navigation.replace('Todo');
    } catch (error) {
      Alert.alert('Login Error', error.message);
    }
  };

  // async function onGoogleButtonPress() {
  //   // Ensure Google Play Services are available
  //   await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

  //   // Sign in and get ID token
  //   const {idToken} = await GoogleSignin.signIn();
  //   console.log(idToken);

  //   if (!idToken) {
  //     throw new Error('No ID token found');
  //   }

  //   // Create Google credential
  //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  //   console.log(googleCredential);

  //   // Sign in with Firebase
  //   return auth().signInWithCredential(googleCredential);
  // }
  return (
    <View style={styles.container}>
      <StatusbarComponent
        barStyle={'dark-content'}
        backgroundColor={colors.White}
      />
      <View style={styles.titleWrapper}>
        <Text style={styles.titleTxt}>FireTask</Text>
      </View>
      <Text style={styles.labelTxt}>Login to your Account</Text>
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

      <CustomBtn
        btnTxt={'Sign In'}
        onPress={() => handleSignIn(email, password)}
      />

      <View style={styles.otherOptionWrapper}>
        <View style={styles.mark} />
        <Text style={styles.optionText}>Or sign in with</Text>
        <View style={styles.mark} />
      </View>

      <View style={styles.logoWrapper}>
        <TouchableOpacity
          style={styles.Logo}
          onPress={() =>
            onGoogleButtonPress()
              .then(() => console.log('sign in 5'))
              .catch(err => console.log(err))
          }>
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

      <View style={styles.signinWrrapper}>
        <Text style={styles.messageTxt}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.btntxt}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SigninScreen;

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
    marginTop: height * 0.1,
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
    marginTop: height * 0.08,
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
    marginTop: height * 0.08,
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
    elevation: 1,
  },
  LogoImg: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  signinWrrapper: {
    flexDirection: 'row',
    marginTop: height * 0.1,
    // position: 'absolute',
    // bottom: height * 0.03,
    alignSelf: 'center',
    gap: 3,
  },
  messageTxt: {
    fontSize: width * 0.036,
    fontFamily: fonts.MontserratMedium,
  },
  btntxt: {
    color: '#007AFF',
    fontSize: width * 0.038,
    fontFamily: fonts.MontserratSemiBold,
  },
});
