import {StyleSheet} from 'react-native';
import {globalStyles} from '../../constants/globalStyles';

export const styles = StyleSheet.create({
  tabBar: {
    display: 'flex',
    flexDirection: 'row',
  },
  tabBarAndroid: {
    paddingBottom: 8,
  },
  centerButton: {
    width: 64,
    height: 64,
    marginTop: -22.5,
    borderWidth: 4,
    borderColor: 'rgba(255, 255, 255, 0.24)',
    backgroundColor: '#28AF6E',
    borderStyle: 'solid',
    borderRadius: 32,
    zIndex: 23233,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerButtonAndroid: {
    borderColor: '#5bc291',
  },
  tab: {
    height: 50,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultIcon: {
    width: 25,
    height: 25,
    backgroundColor: '#BDBDBD',
    borderRadius: 12.5,
  },
  defaultIconActive: {
    backgroundColor: '#28AF6E',
  },
  icon: {margin: 7.55},
  title: {
    ...globalStyles.rubik400,
    fontSize: 10,
    lineHeight: 12,
    textAlign: 'center',
    letterSpacing: -0.24,
    color: '#BDBDBD',
  },
  titleActive: {
    color: '#28AF6E',
  },
});
