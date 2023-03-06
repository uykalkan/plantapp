import {
  Animated,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacityProps,
  View,
} from 'react-native';
import React from 'react';
import Image = Animated.Image;
import {styles} from './styles';
import Button from '../../components/Button';
import Pagination from '../../components/Pagination';
import {theme} from '../../constants/theme';

interface OnboardingOneScreenProps {
  onPressButton?: TouchableOpacityProps['onPress'];
}

interface OnboardingOneScreenFooterProps {
  onPressButton?: TouchableOpacityProps['onPress'];
}

const OnboardingOneScreen: React.FC<OnboardingOneScreenProps> & {
  Footer: React.FC<OnboardingOneScreenFooterProps>;
} = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View
        style={{
          ...styles.container,
          paddingBottom: theme.onBoardingFooterHeight,
        }}>
        <View
          style={{
            ...styles.top,
            marginTop: Platform.OS === 'android' ? theme.containerSpace : 0,
          }}>
          <Image
            style={styles.brush}
            source={require('../../assets/images/brush.png')}
          />
          <Text style={styles.title}>
            Take a photo to <Text style={styles.titleBold}>identify</Text> the
            plant!
          </Text>
        </View>

        <View style={styles.content}>
          <Image
            resizeMode="contain"
            style={styles.mainImage}
            source={require('../../assets/images/onboardingOneMain.png')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

OnboardingOneScreen.Footer = ({onPressButton}) => {
  return (
    <View style={styles.footer}>
      <Button
        testID="onboarding-screen-one-button"
        onPress={onPressButton}
        title="Continue"
      />

      <Pagination style={styles.pagination} selectedIndex={0} totalPage={3} />
    </View>
  );
};

export default OnboardingOneScreen;
