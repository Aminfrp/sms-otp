declare module 'react-native-get-sms-android' {
  const getSms: any;
  export default getSms;
}

declare module 'react-native-android-sms-listener' {
  export interface SmsEvent {
    originatingAddress: string;
    messageBody: string;
    timestamp: number;
  }

  export interface SmsListener {
    addListener: (callback: (message: SmsReceive) => void) => {
      remove: () => void;
    };
    removeListener: () => void;
  }

  const SmsListener: SmsListener;

  export default SmsListener;
}
