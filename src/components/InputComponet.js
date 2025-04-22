import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';

const {height, width} = Dimensions.get('window');

const InputComponet = ({placeholder,value,onChangeText}) => {
  return (
    <View style={styles.inputView}>
      <TextInput
        placeholder={placeholder}
        style={styles.emailBox}
        placeholderTextColor={colors.Grey}
        value={value}
        onChangeText={onChangeText}
        multiline={true}
      />
    </View>
  );
};

export default InputComponet;

const styles = StyleSheet.create({
  emailBox: {
    fontSize: width * 0.036,
    fontFamily: fonts.RobotoMedium,
    color: colors.Grey,
  },
  inputView:{
    elevation: 2,
    borderWidth: 0.4,
    borderColor: colors.Border,
    backgroundColor: colors.White,
    paddingHorizontal: width * 0.04,
    borderRadius: width * 0.02,
    marginTop: height * 0.03,
    paddingVertical: 8,

  }
});
