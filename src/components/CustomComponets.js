import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';

const {height, width} = Dimensions.get('window');

const CustomComponets = ({
  title,
  info,
  lable,
  email,
  password,
  confirmPassword,
  btnTxt,
  optionTxt,
  message,
  messageT,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      {/* TitleWrapper */}
      <View style={styles.titleWrapper}>
        <Text style={styles.titleTxt}>{title}</Text>
      </View>

      {/* Account Wrapper */}

      <View style={styles.accountWrapper}>
        <Text style={styles.labelTxt}>{lable}</Text>
        <Text style={styles.labelDesc}>{info}</Text>
        <TextInput
          placeholder={email}
          style={styles.emailBox}
          placeholderTextColor={colors.Grey}
        />
        <TextInput
          placeholder={password}
          secureTextEntry={true}
          style={styles.emailBox}
          placeholderTextColor={colors.Grey}
        />
        <TextInput
          placeholder={confirmPassword}
          secureTextEntry={true}
          style={styles.emailBox}
          placeholderTextColor={colors.Grey}
        />
        {/* CustomBtn */}
        <TouchableOpacity style={styles.signinBtn}>
          <Text style={styles.signinTxt}>{btnTxt}</Text>
        </TouchableOpacity>

        {/* other option wrapper */}

        <View style={styles.otherOptionWrapper}>
          <View style={styles.mark} />
          <Text style={styles.optionText}>{optionTxt}</Text>
          <View style={styles.mark} />
        </View>

        {/*logo Wrapper */}

        <View style={styles.logoWrapper}>
          <TouchableOpacity style={styles.Logo}>
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
          <Text style={styles.messageTxt}>{message}</Text>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.btntxt}>{messageT}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CustomComponets;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
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
    marginLeft: '5%',
    fontFamily: fonts.MontserratBold,
  },
  accountWrapper: {
    // backgroundColor:'red',
    marginHorizontal: width * 0.05,
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
    width: '98%',
    lineHeight: 15,
    letterSpacing: 1.3,
  },
  emailBox: {
    borderWidth: 0.4,
    borderColor: colors.Border,
    marginTop: height * 0.035,
    borderRadius: width * 0.02,
    paddingHorizontal: width * 0.04,
    backgroundColor: colors.White,
    elevation: 5,
    paddingVertical: 15,
    fontSize: width * 0.036,
    fontFamily: fonts.RobotoMedium,
    color: colors.Grey,
  },
  signinBtn: {
    backgroundColor: colors.Blue,
    marginTop: height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: height * 0.02,
    borderRadius: width * 0.015,
  },
  signinTxt: {
    color: colors.White,
    fontSize: width * 0.036,
    fontFamily: fonts.MontserratSemiBold,
  },
  otherOptionWrapper: {
    marginTop: height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  optionText: {
    marginHorizontal: width * 0.01,
    fontSize: width * 0.038,
  },
  mark: {
    width: width * 0.012,
    height: height * 0.0019,
    borderWidth: width * 0.0015,
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
    borderColor: 'rgba(0,0,0,0.4)',
    borderRadius: width * 0.015,
    paddingHorizontal: width * 0.09,
    paddingVertical: height * 0.008,
  },
  LogoImg: {
    height: height * 0.05,
    width: width * 0.1,
  },
  signinWrrapper: {
    flexDirection: 'row',
    marginTop: height * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageTxt: {
    fontSize: width * 0.036,
    fontFamily: fonts.MontserratMedium,
  },
  btntxt: {
    color: colors.Blue,
    fontSize: width * 0.038,
    fontFamily: fonts.MontserratSemiBold,
  },
});
