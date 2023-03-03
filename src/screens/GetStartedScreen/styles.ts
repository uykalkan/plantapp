import {StyleSheet} from 'react-native';
import {globalStyles} from '../../constants/globalStyles';

export const styles = StyleSheet.create({
  root: {
    overflow: 'hidden',
    flex: 1,
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
  title: {
    ...globalStyles.rubik400,
    color: '#13231B',
    fontSize: 28,
    lineHeight: 33.18,
    letterSpacing: 0.07,
  },
  subTitle: {
    ...globalStyles.rubik400,
    width: 300,
    fontSize: 16,
    marginTop: 8,
    lineHeight: 22,
    letterSpacing: 0.07,
    color: 'rgba(19, 35, 27, 0.7)',
  },
  titleBold: {
    ...globalStyles.rubik500,
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  centerImage: {
    marginTop: 24,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: 375,
    height: 499,
  },
  cameraLine: {
    marginTop: 20,
  },
  term: {
    ...globalStyles.rubik400,
    alignSelf: 'center',
    width: 232,
    top: 17,
    fontSize: 11,
    lineHeight: 15,
    textAlign: 'center',
    letterSpacing: 0.07,
    color: 'rgba(89, 113, 101, 0.7)',
  },
});
