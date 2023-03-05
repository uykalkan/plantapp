import {
  Animated,
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import React from 'react';
import Image = Animated.Image;
import {styles} from './styles';
import Button from '../../components/Button';
import FasterIcon from '../../assets/images/paywall/faster.svg';
import UnlimitedIcon from '../../assets/images/paywall/unlimited.svg';
import CloseIcon from '../../assets/images/paywall/close.svg';

interface PaywallOptionProps extends TouchableOpacityProps {
  title?: string;
  subTitle?: string;
  selected?: boolean;
  discount?: string;
}

const PaywallOption: React.FC<PaywallOptionProps> = ({
  title,
  subTitle,
  selected,
  discount,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles.paywallOption, selected && styles.paywallOptionSelected]}
      {...props}>
      <View
        style={[
          styles.paywallOptionRadio,
          selected && styles.paywallOptionRadioSelected,
        ]}>
        {selected && <View style={styles.paywallOptionRadioInner} />}
      </View>

      <View>
        <Text style={styles.paywallOptionTitle}>{title}</Text>
        <Text style={styles.paywallOptionSubTitle}>{subTitle}</Text>
      </View>

      {discount && (
        <View style={styles.paywallOptionBadge}>
          <Text style={styles.paywallOptionBadgeText}>{discount}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

interface OnboardingTwoScreenProps {
  onPressButton?: TouchableOpacityProps['onPress'];
}

const features = [
  {
    id: '1',
    icon: <UnlimitedIcon />,
    title: 'Unlimited',
    subTitle: 'Plant Identify',
  },
  {
    id: '2',
    icon: <FasterIcon />,
    title: 'Faster',
    subTitle: 'Process',
  },
  {
    id: '3',
    icon: <FasterIcon />,
    title: 'Detailed',
    subTitle: 'Plant care',
  },
];

const PaywallScreen: React.FC<OnboardingTwoScreenProps> = ({onPressButton}) => {
  const [selectedOption, setSelectedOption] = React.useState(0);

  const handleSelectOption = (id: number) => {
    setSelectedOption(id);
  };

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />

      <Image
        source={require('../../assets/images/paywallBackground.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.top}>
            <Text style={styles.title}>
              <Text style={styles.titleBold}>PlantApp</Text> Premium
            </Text>
            <Text style={styles.subTitle}>Access All Features</Text>
          </View>

          <FlatList
            horizontal
            data={features}
            renderItem={({item}) => (
              <View key={item.id} style={styles.featureListItem}>
                <View style={styles.featureListItemIcon}>{item.icon}</View>
                <Text style={styles.featureListItemTitle}>{item.title}</Text>
                <Text style={styles.featureListItemSubTitle}>
                  {item.subTitle}
                </Text>
              </View>
            )}
            keyExtractor={item => item.id}
          />

          <PaywallOption
            onPress={() => handleSelectOption(0)}
            title="1 Month"
            subTitle="$2.99/month, auto renewable"
            selected={selectedOption === 0}
          />

          <PaywallOption
            onPress={() => handleSelectOption(1)}
            title="1 Year"
            subTitle="First 3 days free, then $529,99/year"
            selected={selectedOption === 1}
            discount="Save -50%"
          />

          <Button
            style={styles.tryButton}
            onPress={onPressButton}
            title="Try free for 3 days"
          />

          <Text style={styles.note}>
            After the 3-day free trial period you’ll be charged ₺274.99 per year
            unless you cancel before the trial expires. Yearly Subscription is
            Auto-Renewable
          </Text>
          <Text style={styles.links}>Terms • Privacy • Restore</Text>
        </View>
      </SafeAreaView>

      <TouchableOpacity style={styles.closeButton}>
        <CloseIcon />
      </TouchableOpacity>
    </View>
  );
};

export default PaywallScreen;
