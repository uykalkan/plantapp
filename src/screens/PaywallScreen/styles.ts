import {StyleSheet} from 'react-native';
import {globalStyles} from '../../constants/globalStyles';

export const styles = StyleSheet.create({
  root: {
    overflow: 'hidden',
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    padding: 24,
  },
  backgroundImage: {
    position: 'absolute',
    width: 1440,
    height: 865,
    top: -11,
    left: -708,
    zIndex: 0,
  },
  top: {
    width: 303,
  },
  brush: {
    position: 'absolute',
    width: 150,
    right: 32,
    top: 36,
  },
  title: {
    ...globalStyles.rubik500,
    color: '#13231B',
    fontSize: 28,
    lineHeight: 33,
    letterSpacing: -1,
  },
  titleBold: {
    ...globalStyles.rubik800,
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  mainImage: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: 375,
    height: 530,
    marginTop: 12,
  },
  pagination: {
    marginTop: 32.5,
  },
});
