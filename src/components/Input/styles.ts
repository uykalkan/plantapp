import {StyleSheet} from 'react-native';
import {globalStyles} from '../../constants/globalStyles';

export const styles = StyleSheet.create({
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.88)',
    borderWidth: 0.2,
    borderColor: 'rgba(60, 60, 67, 0.25)',
    borderStyle: 'solid',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    height: 44,
    ...globalStyles.rubik400,
    fontSize: 15.5,
    lineHeight: 18,
    letterSpacing: 0.07,
    paddingLeft: 48,
  },
  searchIcon: {
    position: 'absolute',
    top: 12,
    left: 16,
  },
});
