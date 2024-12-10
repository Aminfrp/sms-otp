import {PermissionsAndroid} from 'react-native';

export const getReadSMSPermission = async (callback: void) => {
  try {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.READ_SMS,
      PermissionsAndroid.PERMISSIONS.RECEIVE_SMS,
    ]);
    if (
      granted['android.permission.READ_SMS'] &&
      granted['android.permission.RECEIVE_SMS']
    ) {
      callback;
    } else {
      console.log('SMS permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};
