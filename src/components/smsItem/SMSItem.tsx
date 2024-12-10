import Clipboard from '@react-native-clipboard/clipboard';
import moment from 'jalali-moment';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import CopyIcon from '../../assets/icons/Copy.icon';
import styles from './smsItem.style';
import {SmsItemProps} from './smsItems.types';

const SMSItem = (props: SmsItemProps) => {
  const {item} = props;
  if (!item) {
    return;
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          item.body &&
            Clipboard.setString(
              item.body.match(/(?<!\d)\d{5}(?!\d)/)!.toString(),
            );
        }}>
        <CopyIcon height={20} width={20} stroke="gray" />
      </TouchableOpacity>

      <Text style={styles.text} lineBreakMode="tail" numberOfLines={1}>
        {item.body?.match(/(?<!\d)\d{5}(?!\d)/)}
      </Text>
      <Text style={styles.date}>
        {moment(new Date(item.date!), 'YYYY/MM/DD HH:mm:ss')
          .locale('fa')
          .format('jYYYY/jMM/jDD - HH:mm')}
      </Text>
    </View>
  );
};

export default SMSItem;
