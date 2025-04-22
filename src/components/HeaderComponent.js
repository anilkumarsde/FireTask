import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {fonts} from '../utils/fonts';
import {colors} from '../utils/colors';
import { useNavigation } from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

const HeaderComponent = ({icon1, add, icon2}) => {
  const goBackHandler=()=>{
    navigation.goBack('Todo')
  }
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>goBackHandler()}>
        <Text>{icon1}</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitleTxt}>{add}</Text>
      <TouchableOpacity>
        <Text>{icon2}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: width * 0.05,
    marginTop: height * 0.016,
  },
  headerTitleTxt: {
    fontSize: width * 0.04,
    fontFamily: fonts.MontserratMedium,
    color: colors.White,
  },
});
