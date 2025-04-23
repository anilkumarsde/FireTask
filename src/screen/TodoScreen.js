import {
  Alert,
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../utils/colors';
import StatusbarComponent from '../components/StatusbarComponent';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {fonts} from '../utils/fonts';
import dayjs from 'dayjs';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {height, width} = Dimensions.get('window');

const TodoScreen = ({navigation}) => {
  const [time, setTime] = useState(dayjs().format('HH:mm'));
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs().format('HH:mm'));
    }, 1000);

    setTime(dayjs().format('HH:mm'));

    return () => clearInterval(interval);
  }, []);

  // for real time update
  useEffect(() => {
    const unsubscribe = firestore()
      .collection('todos')
      .orderBy('time', 'desc')
      .onSnapshot(quearySnapshort => {
        const list = [];
        quearySnapshort.forEach(doc => {
          const data = doc.data();
          list.push({id: doc.id, ...data});
        });
        setTodo(list);
      });
    return () => unsubscribe();
  }, []);

  // delete item handler

  const DeleteItemHandler = async id => {
    try {
      await firestore().collection('todos').doc(id).delete();
      console.log('item has been deleted');
    } catch (error) {
      console.log('something wrong', error);
    }
  };

  const gotoAddTaskscreen = () => {
    navigation.navigate('AddTask');
  };

  // go for edit task handler
  const goForEdit = (id, task, infor) => {
    navigation.navigate('AddTask', {id, task, infor});
  };

  // signout use handler
  const signountUser = async () => {
    try {
      await auth().signOut();
      await AsyncStorage.removeItem('AlredyLounched');
      navigation.navigate('Signin');
      console.log('user sinout successfuly');
    } catch (error) {
      console.log('something went wrong',error);
    }
  };

  const renderItem = ({item}) => {
    let itemAddedTime = 'No time';

    if (typeof item.time === 'string') {
      itemAddedTime = item.time;
    } else if (item.time?.toDate) {
      const time = item.time.toDate();
      itemAddedTime = time.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
    }
    return (
      <View style={styles.listItem}>
        <View style={styles.leftListBox}>
          <TouchableOpacity
            style={styles.iconWrpper}
            onPress={() => DeleteItemHandler(item.id)}>
            <Feather
              name={'cpu'}
              size={width * 0.05}
              color={colors.iconColor}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TodomessageWrapper}
            onPress={() => goForEdit(item.id, item.task, item.infor)}>
            <Text style={styles.titletxt}>{item.task}</Text>
            <Text style={styles.subTitleTxt}>{item.infor}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rightListBox}>
          <Text style={styles.timeTxt}>{itemAddedTime}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusbarComponent
        barStyle={'light-content'}
        backgroundColor={'#25b6f5'}
      />
      {/* // backgranound Image */}
      <ImageBackground
        style={styles.imageBackground}
        source={require('../utils/images/mountain.jpg')}
        resizeMode="cover">
        <View style={styles.headerContainer}>
          {/* Left side: */}
          <View style={styles.leftboxWrapper}>
            <Feather
              name="menu"
              size={20}
              color={colors.White}
              onPress={signountUser}
            />
            <Text style={styles.leftTitletxt}>Your Things</Text>
          </View>

          {/* Right side */}
          <View style={styles.rightboxWrapper}>
            <Text style={styles.rightTitleTxt}>{time}</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.inboxWrapper}>
        <Text style={styles.inboxTxt}>INBOX</Text>
      </View>
      {/* todoList wrapper */}
      <View style={styles.todoListWrapper}>
        <View style={styles.listWraper}>
          <FlatList
            data={todo}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View style={styles.footerWrapper}>
          <View style={styles.leftfooterBox}>
            <Text style={styles.completTxt}>COMPLETED</Text>
            <View style={styles.completCountWrapper}>
              <Text style={styles.completCountTxt}>5</Text>
            </View>
          </View>
          <View style={styles.rightFooterBox}>
            <TouchableOpacity onPress={() => gotoAddTaskscreen()}>
              <AntDesign
                name={'pluscircle'}
                color={colors.iconColor}
                size={50}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
    // paddingHorizontal:width*0.05
  },
  imageBackground: {
    width: '100%',
    height: 150, // You can adjust this height as needed
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    // paddingHorizontal: width * 0.05,,
    // marginHorizontal: width * 0.05,
    marginHorizontal: width * 0.05,
    height: '100%',
  },
  leftboxWrapper: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // gap: 10,
    marginTop: height * 0.02,
    // borderBottomColor: 'red',
    // borderBottomWidth: 5,
    width: '50%',
  },
  leftTitletxt: {
    color: colors.White,
    fontSize: width * 0.055,
    fontFamily: fonts.MontserratMedium,
    width: width * 0.25,
    marginTop: height * 0.02,
  },
  rightboxWrapper: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  rightTitleTxt: {
    color: colors.White,
    fontFamily: fonts.MontserratBold,
    fontSize: width * 0.04,
  },
  inboxWrapper: {
    // marginTop:height*0.02,
    marginVertical: height * 0.02,
    marginHorizontal: width * 0.05,
  },
  inboxTxt: {
    fontFamily: fonts.MontserratSemiBold,
    fontSize: width * 0.035,
    color: colors.Grey,
  },
  listItem: {
    flexDirection: 'row',
    paddingBottom: height * 0.02,
    marginBottom: height * 0.02,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: width * 0.05,
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: colors.backGraound,
  },
  leftListBox: {
    // backgroundColor:'blue',
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.025,
    width: '75%',
  },
  iconWrpper: {
    height: height * 0.07,
    width: width * 0.14,
    borderRadius: width / 2,
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.backGraound,
  },
  TodomessageWrapper: {
    // backgroundColor: 'tomato',
    paddingVertical: height * 0.01,
    width: '68%',
  },
  rightListBox: {
    // backgroundColor: 'green',
    width: '30%',
  },
  todoListWrapper: {
    // borderBottomWidth: 1,
    flex: 1,
  },
  titletxt: {
    fontFamily: fonts.MontserratSemiBold,
    fontSize: width * 0.04,
    color: colors.Black,
  },
  subTitleTxt: {
    fontFamily: fonts.MontserratMedium,
    color: colors.Grey,
    fontSize: width * 0.035,
  },
  timeTxt: {
    fontFamily: fonts.MontserratMedium,
    fontSize: width * 0.034,
    color: colors.Grey,
  },
  listWraper: {
    height: '85%',
  },
  footerWrapper: {
    height: '15%',
    // paddingVertical:10
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: width * 0.05,
    justifyContent: 'space-between',
  },
  leftfooterBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  completCountWrapper: {
    height: height * 0.025,
    width: width * 0.05,
    borderRadius: width / 2,
    backgroundColor: colors.Grey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightFooterBox: {},
  completTxt: {
    fontFamily: fonts.MontserratSemiBold,
    color: colors.Grey,
    fontSize: width * 0.03,
  },
  completCountTxt: {
    fontFamily: fonts.MontserratBold,
    fontSize: width * 0.024,
    color: colors.White,
  },
});
