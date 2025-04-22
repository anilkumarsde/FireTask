import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const StatusbarComponent = ({barStyle, backgroundColor}) => {
  return (
    <View>
      <StatusBar barStyle={barStyle} backgroundColor={backgroundColor} />
    </View>
  );
};

export default StatusbarComponent;

const styles = StyleSheet.create({});
