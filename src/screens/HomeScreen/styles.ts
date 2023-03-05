import {StyleSheet} from 'react-native';
import {globalStyles} from '../../constants/globalStyles';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  scrollView: {},
  header: {
    backgroundColor: '#F7F7F7',
  },
  greeting: {
    padding: 14,
    paddingLeft: 24,
    paddingRight: 24,
  },
  title: {
    ...globalStyles.rubik400,
    marginBottom: 6,
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0.07,
    color: '#13231B',
  },
  subtitle: {
    ...globalStyles.rubik500,
    fontSize: 24,
    lineHeight: 28,
    letterSpacing: 0.35,
    color: '#13231B',
  },
  inputWrapper: {
    paddingBottom: 14,
    paddingLeft: 24,
    paddingRight: 24,
  },
  headerBackgroundImage: {
    width: '100%',
    height: 75,
    position: 'absolute',
    bottom: 0,
    zIndex: -1,
  },
  premiumBox: {
    margin: 24,
    backgroundColor: '#24201A',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    padding: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  envelopeIcon: {
    marginBottom: -8,
  },
  premiumBoxCenter: {
    marginLeft: 12,
    flex: 1,
  },
  premiumBoxTitle: {
    ...globalStyles.sfProText700,
    color: '#E5C990',
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: -0.32,
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowRadius: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.32)',
  },
  premiumBoxSubTitle: {
    ...globalStyles.sfProText400,
    fontSize: 13,
    lineHeight: 16,
    color: '#E5C990',
  },
  premiumBoxRight: {
    width: 24,
    height: 24,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  getStarted: {
    marginLeft: 24,
    marginBottom: 16,
    ...globalStyles.rubik500,
    fontSize: 15,
    lineHeight: 20,
    color: '#13231B',
  },
  categoryWrapper: {width: '50%'},
  categoryInner: {
    margin: 5,
    borderWidth: 0.5,
    borderColor: 'rgba(41, 187, 137, 0.18)',
    borderStyle: 'solid',
    borderRadius: 12,
    height: 152,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    padding: 16,
  },
  categoryBackgroundImage: {
    height: 152,
    width: 158,
    position: 'absolute',
    right: 0,
  },
  categoryTitle: {
    ...globalStyles.rubik500,
    alignSelf: 'flex-start',
    maxWidth: 102,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 5,
    paddingRight: 5,
    paddingBottom: 5,
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: -0.32,
    color: '#13231B',
  },
  questionWrapper: {
    width: 240,
    height: 164,
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  questionTitle: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    height: 64,
  },
  questionTitleText: {
    ...globalStyles.rubik400,
    width: '100%',
    paddingLeft: 14,
    paddingRight: 14,
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
    color: '#ffffff',
  },
  questionContainer: {paddingBottom: 12, paddingRight: 14},
  questionList: {marginLeft: 24, gap: 24, marginBottom: 12},
  categoryContainer: {
    marginLeft: 24 - 5,
    marginRight: 24 - 5,
    marginBottom: 24,
    gap: 16,
  },
});
