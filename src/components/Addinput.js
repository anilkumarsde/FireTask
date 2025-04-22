import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';

const {height, width} = Dimensions.get('window');
const Addinput = ({placeholder, value, onpress,maxlength}) => {
  return (
    <View style={styles.inputBoxContainer}>
      <TextInput
        placeholder={placeholder}
        style={styles.mainInputfield}
        placeholderTextColor={colors.White}
        value={value}
        // onPress={()=>onpress()}
        onChangeText={onpress}
        multiline={true}
        autoCorrect={true}
        maxLength={maxlength}
      />
    </View>
  );
};

export default Addinput;

const styles = StyleSheet.create({
  inputBoxContainer: {
    marginHorizontal: width * 0.05,
    borderBottomWidth: 1,
    borderBottomColor: colors.Grey,
    marginTop: height * 0.07,
  },
  mainInputfield: {
    fontFamily: fonts.MontserratMedium,
    color: colors.White,
    fontSize: width * 0.045,
  },
});
