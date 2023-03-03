import {StyleSheet} from 'react-native';
import {globalStyles} from '../../constants/globalStyles';

export const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 18,
    paddingRight: 16,
    paddingBottom: 18,
    paddingLeft: 16,
    gap: 8,
    width: '100%',
    height: 56,
    backgroundColor: '#28AF6E',
    backdropFilter: 'blur(40px)',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
  text: {
    ...globalStyles.sfProText700,
    fontSize: 16,
    lineHeight: 24,
    height: 24,
    letterSpacing: -0.24,
    color: '#FFFFFF',
  },
});
