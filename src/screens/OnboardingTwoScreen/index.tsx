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

interface OnboardingTwoScreenProps {
  onPressButton?: TouchableOpacityProps['onPress'];
}

const OnboardingTwoScreen: React.FC<OnboardingTwoScreenProps> = ({
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

        <Button onPress={onPressButton} title="Continue" />

        <Pagination style={styles.pagination} selectedIndex={1} totalPage={3} />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingTwoScreen;
