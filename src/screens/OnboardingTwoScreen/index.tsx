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

interface OnboardingTwoScreenProps {
  onPressButton?: TouchableOpacityProps['onPress'];
}

interface OnboardingTwoScreenFooterProps {
  onPressButton?: TouchableOpacityProps['onPress'];
}

const OnboardingTwoScreen: React.FC<OnboardingTwoScreenProps> & {
  Footer: React.FC<OnboardingTwoScreenFooterProps>;
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
            Get plant <Text style={styles.titleBold}>care guides</Text>
            <Text>{'\n'}</Text>
          </Text>
        </View>

        <View style={styles.content}>
          <Image
            resizeMode="contain"
            style={styles.mainImage}
            source={require('../../assets/images/onboardingTwoMain.png')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

OnboardingTwoScreen.Footer = ({onPressButton}) => {
  return (
    <View style={styles.footer}>
      <Button
        testID="onboarding-two-screen-button"
        onPress={onPressButton}
        title="Continue"
      />

      <Pagination style={styles.pagination} selectedIndex={1} totalPage={3} />
    </View>
  );
};

export default OnboardingTwoScreen;
