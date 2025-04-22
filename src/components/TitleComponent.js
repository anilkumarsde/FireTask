import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';

const {height, width} = Dimensions.get('window');

const TitleComponent = ({title}) => {
  return (
    <View style={styles.titleWrapper}>
      <Text style={styles.titleTxt}>{title}</Text>
    </View>
  );
};

export default TitleComponent;

const styles = StyleSheet.create({
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
});
