import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, StatusBar, Text} from 'react-native';
import SmsListener from 'react-native-android-sms-listener';
import SmsAndroid from 'react-native-get-sms-android';
import styles from './app.style';
import NotFound from './components/notFound/NotFound';
import SMSItem from './components/smsItem/SMSItem';
import {SmsMessage, SmsReceive} from './types/global';
import {getReadSMSPermission} from './utils';

function App(): React.JSX.Element {
  const DESTINATION = 'ADLIRAN';
  const [smsList, setSmsList] = React.useState<Partial<SmsMessage>[]>([]);

  const getSmsList = () => {
    const filter = {
      box: 'inbox',
      address: DESTINATION,
    };

    SmsAndroid.list(
      JSON.stringify(filter),
      (fail: string) => {
        console.error('Failed to fetch SMS: ', fail);
      },
      (count: number, smsListString: string) => {
        const messages: SmsMessage[] = JSON.parse(smsListString);

        setSmsList(prev => [
          ...prev,
          ...messages.filter(sms => sms.body.match(/(?<!\d)\d{5}(?!\d)/)),
        ]);
      },
    );
  };

  // Listener for incoming SMS
  useEffect(() => {
    const subscribe = SmsListener.addListener((message: SmsReceive) => {
      if (message.originatingAddress === DESTINATION) {
        const match = message.body.match(/(?<!\d)\d{5}(?!\d)/);
        if (match) {
          setSmsList(prev => [
            ...prev,
            {
              body: message.body,
              date: message.timestamp,
              address: message.originatingAddress,
            },
          ]);
        }
      }
    });

    return () => subscribe.remove();
  }, []);

  useEffect(() => {
    getReadSMSPermission(getSmsList());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Text style={styles.title}>پیامک های احراز هویت</Text>
      <FlatList
        data={smsList}
        keyExtractor={(item, index) => `sms-${index}`}
        renderItem={({item}) => <SMSItem item={item} />}
        contentContainerStyle={[
          styles.smsListContainer,
          {flex: smsList.length === 0 ? 1 : 0},
        ]}
        ListEmptyComponent={<NotFound />}
      />
    </SafeAreaView>
  );
}

export default App;
