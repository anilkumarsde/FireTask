import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';
const {height, width} = Dimensions.get('window');

const CustomBtn = ({btnTxt, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.signinBtn} onPress={onPress}>
        <Text style={styles.signinTxt}>{btnTxt}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({
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
});
