import React from 'react';
import {Text, View} from 'react-native';
import NotFoundIcon from '../../assets/icons/NotFound.icon';
import styles from './notFound.style';

const NotFound = () => {
  return (
    <View style={styles.container}>
      <NotFoundIcon height={30} width={30} stroke="gray" />
      <Text style={styles.text}>کد احراز هویتی پیدا نشد.</Text>
    </View>
  );
};

export default NotFound;
