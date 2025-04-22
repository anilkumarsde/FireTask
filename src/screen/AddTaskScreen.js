import {
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {colors} from '../utils/colors';
import StatusbarComponent from '../components/StatusbarComponent';
import HeaderComponent from '../components/HeaderComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {fonts} from '../utils/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Dropdown} from 'react-native-element-dropdown';
import Addinput from '../components/Addinput';
import {getApp} from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

const {height, width} = Dimensions.get('window');

const AddTaskScreen = ({navigation}) => {
  const [value, setValue] = useState(null);
  const [task, setTask] = useState('');
  const [infor, setInfor] = useState('');
  const dropdownRef = useRef(null);
  const data = [
    {label: 'Business', value: 'business'},
    {label: 'Personal', value: 'personal'},
    {label: 'Work', value: 'work'},
    {label: 'Study', value: 'study'},
    {label: 'Shopping', value: 'shopping'},
    {label: 'Fitness', value: 'fitness'},
    {label: 'Health', value: 'health'},
    {label: 'Finance', value: 'finance'},
    {label: 'Travel', value: 'travel'},
    {label: 'Event', value: 'event'},
    {label: 'Meeting', value: 'meeting'},
    {label: 'Reminder', value: 'reminder'},
    {label: 'Call', value: 'call'},
    {label: 'Birthday', value: 'birthday'},
    {label: 'Entertainment', value: 'entertainment'},
    {label: 'Chores', value: 'chores'},
    {label: 'Goals', value: 'goals'},
    {label: 'Errands', value: 'errands'},
    {label: 'Project', value: 'project'},
    {label: 'Others', value: 'others'},
  ];

  const AddItemHandler = async (task, infor) => {
      if(task.trim()==''|| infor.trim()==''){
        Alert.alert('plase fill all field')
        return ;
      }
      const now = new Date();
      const currentTime = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
      try {
        await firestore().collection('todos').add({
          task: task,
          infor: infor,
          time: currentTime,
        });
        setTask('');
        setInfor('');
        console.log('data has been added');
        navigation.goBack(' Todo');
      } catch (error) {
        console.log('something wrong', error);
      }


  };

  return (
    <View style={styles.container}>
      {/* status bar  */}
      <StatusbarComponent
        barStyle={'light-content'}
        backgroundColor={colors.purple}
      />

      <Dropdown
        ref={dropdownRef}
        style={styles.dropdown}
        containerStyle={styles.dropdownContainer}
        data={data}
        labelField="label"
        valueField="value"
        value={value}
        onChange={item => setValue(item.value)}
        showsVerticalScrollIndicator={false}
      />

      <HeaderComponent
        icon1={
          <Ionicons name="arrow-back" size={20} color={colors.iconColor} />
        }
        add={'Add new things'}
        icon2={<Feather name="menu" size={20} color={colors.iconColor} />}
      />
      <View style={styles.pencilIconWrapper}>
        <Image
          source={require('../utils/images/pencils.png')}
          style={styles.pencilicon}
        />
      </View>

      {/* input field  */}

      {/* <Addinput placeholder={'Business'}/> */}

      <View style={styles.inputBoxContainer}>
        <TouchableOpacity
          style={styles.mainInputfield}
          onPress={() => dropdownRef.current?.open()}>
          <Text style={styles.categoryTitle}>
            {value
              ? value.charAt(0).toUpperCase() + value.slice(1)
              : 'Select Category'}
          </Text>
          <AntDesign
            name={'caretdown'}
            size={width * 0.05}
            color={colors.Grey}
          />
        </TouchableOpacity>
      </View>
      {/* task Input */}
      <Addinput
        placeholder={'Write your task here'}
        value={task}
        onpress={setTask}
        maxlength={20}
      />
      <Addinput
        placeholder={'Describe the task'}
        value={infor}
        onpress={setInfor}
        maxlength={25}
      />
      <TouchableOpacity
        style={styles.addItemBtn}
        onPress={() => AddItemHandler(task, infor)}>
        <Text style={styles.addBtnTxt}>ADD YOUR THINGS</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTaskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purple,
  },
  pencilIconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    height: height * 0.08,
    width: width * 0.16,
    borderRadius: width / 2,
    alignSelf: 'center',
    marginTop: height * 0.02,
    borderColor: colors.Grey,
  },
  pencilicon: {
    height: height * 0.035,
    width: width * 0.07,
    // transform: [{rotate: '180deg'}]
  },
  inputBoxContainer: {
    marginHorizontal: width * 0.05,
    borderBottomWidth: 1,
    borderBottomColor: colors.Grey,
    marginTop: height * 0.07,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mainInputfield: {
    fontFamily: fonts.MontserratSemiBold,
    color: colors.White,
    fontSize: width * 0.04,
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: height * 0.012,
  },
  categoryTitle: {
    fontFamily: fonts.MontserratMedium,
    color: colors.White,
    fontSize: width * 0.045,
  },
  dropdown: {
    position: 'absolute',
    top: height * 0.18,
    width: '90%',
    height: 0,
    opacity: 0,
    alignSelf: 'center',
  },
  dropdownContainer: {
    marginTop: height * 0.075,
    // backgroundColor:'red',
    borderRadius: height * 0.02,
    // height:height*0.2
  },
  addItemBtn: {
    backgroundColor: colors.BtnColor,
    marginHorizontal: width * 0.05,
    marginTop: height * 0.08,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: height * 0.02,
    borderRadius: height * 0.012,
  },
  addBtnTxt: {
    fontFamily: fonts.MontserratMedium,
    fontSize: width * 0.032,
    color: colors.White,
  },
});
