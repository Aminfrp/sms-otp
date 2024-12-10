import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  text: {
    flex: 1,
    fontWeight: 900,
    textAlign: 'left',
  },
  date: {
    fontSize: 10,
    color: 'gray',
  },
});
