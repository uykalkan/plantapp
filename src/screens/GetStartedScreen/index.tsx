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

interface GetStartedScreenProps {
  onPressButton?: TouchableOpacityProps['onPress'];
}

const GetStartedScreen: React.FC<GetStartedScreenProps> = ({onPressButton}) => {
  return (
    <SafeAreaView style={styles.root}>
      <Image
        source={require('../../assets/images/getStartedBackground.png')}
        style={styles.backgroundImage}
        resizeMode="stretch"
      />

      <View style={styles.container}>
        <Text style={styles.title}>
          Welcome to <Text style={styles.titleBold}>PlantApp</Text>
        </Text>

        <Text style={styles.subTitle}>
          Identify more than 3000+ plants and 88% accuracy.
        </Text>

        <View style={styles.content}>
          <Image
            style={styles.centerImage}
            source={require('../../assets/images/plant.png')}
          />
        </View>

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
    </SafeAreaView>
  );
};

export default GetStartedScreen;
