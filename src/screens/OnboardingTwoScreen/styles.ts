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
    flex: 1,
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
    flex: 1,
  },
  mainImage: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    marginTop: 12,
    marginBottom: -24, // TODO: image bottom space
  },
  pagination: {
    marginTop: 32.5,
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    zIndex: 3,
    height: 120,
  },
});
