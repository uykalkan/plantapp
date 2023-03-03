import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(19, 35, 27, 0.25)',
    marginHorizontal: 4,
  },
  dotSelected: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#13231B',
  },
});
