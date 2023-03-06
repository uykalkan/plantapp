import {
  Animated,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacityProps,
  View,
  ViewProps,
} from 'react-native';
import React from 'react';
import Image = Animated.Image;
import {styles} from './styles';
import Button from '../../components/Button';
import {theme} from '../../constants/theme';

interface GetStartedScreenProps {
  onPressButton?: TouchableOpacityProps['onPress'];
}

interface GetStartedScreenFooterProps extends ViewProps {
  onPressButton?: TouchableOpacityProps['onPress'];
}

const GetStartedScreen: React.FC<GetStartedScreenProps> & {
  Footer: React.FC<GetStartedScreenFooterProps>;
} = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Image
        source={require('../../assets/images/getStartedBackground.png')}
        style={styles.backgroundImage}
        resizeMode="stretch"
      />

      <View
        style={{
          ...styles.container,
          paddingBottom: theme.onBoardingFooterHeight,
        }}>
        <Text
          style={{
            ...styles.title,
            paddingTop: Platform.OS === 'android' ? theme.containerSpace : 0,
          }}>
          Welcome to <Text style={styles.titleBold}>PlantApp</Text>
        </Text>

        <Text style={styles.subTitle}>
          Identify more than 3000+ plants and 88% accuracy.
        </Text>

        <View style={styles.content}>
          <Image
            style={styles.centerImage}
            source={require('../../assets/images/plant.png')}
            resizeMode="contain"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

GetStartedScreen.Footer = ({onPressButton, style}) => {
  return (
    <View style={[styles.footer, style]}>
      <Button
        testID="get-started-button"
        onPress={onPressButton}
        title="Get Started"
      />

      <Text style={styles.term}>
        By tapping next, you are agreeing to PlantID Terms of Use & Privacy
        Policy.
      </Text>
    </View>
  );
};

export default GetStartedScreen;
