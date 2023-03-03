import {
  Animated,
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

interface OnboardingOneScreenProps {
  onPressButton?: TouchableOpacityProps['onPress'];
}

const OnboardingOneScreen: React.FC<OnboardingOneScreenProps> = ({
  onPressButton,
}) => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <View style={styles.top}>
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

        <Button onPress={onPressButton} title="Continue" />

        <Pagination style={styles.pagination} selectedIndex={0} totalPage={3} />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingOneScreen;
