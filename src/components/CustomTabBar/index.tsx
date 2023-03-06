import {
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import React, {ReactNode} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs/src/types';
import {SvgProps} from 'react-native-svg';
import ScanIcon from '../../assets/images/scanIcon.svg';
import {styles} from './styles';
import {onBoardingActions} from '../../redux/reduces/onboardingSlice';
import {useAppDispatch} from '../../redux/store';

interface TabBarTabProps extends TouchableOpacityProps {
  icon?: ReactNode;
  title?: string;
  isActive?: boolean;
}

const Tab: React.FC<TabBarTabProps> = ({icon, title, isActive, ...props}) => {
  return (
    <TouchableOpacity style={[styles.tab, props.style]} {...props}>
      <View style={styles.icon}>
        {icon || (
          <View
            style={[styles.defaultIcon, isActive && styles.defaultIconActive]}
          />
        )}
      </View>
      <Text style={[styles.title, isActive && styles.titleActive]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const dispatch = useAppDispatch();

  const getTabProps = (tabIndex: number) => {
    let icon;

    const title =
      descriptors[state.routes[tabIndex].key].options.title ||
      state.routes[tabIndex].name;

    const isActive = state.index === tabIndex;

    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: state.routes[tabIndex].key,
        canPreventDefault: true,
      });

      if (state.index !== tabIndex && !event.defaultPrevented) {
        navigation.navigate(state.routes[tabIndex].name);
      }
    };

    if (descriptors[state.routes[tabIndex].key].options.tabBarIcon) {
      icon = React.createElement(
        descriptors[state.routes[tabIndex].key].options
          .tabBarIcon as React.FC<SvgProps>,
        {fill: isActive ? '#28AF6E' : '#BDBDBD'},
      );
    }

    return {title, icon, isActive, onPress};
  };

  const onPressCenterButton = () => {
    dispatch(onBoardingActions.resetOnboardingShown());
  };

  return (
    <SafeAreaView>
      <View
        style={[
          styles.tabBar,
          Platform.OS === 'android' && styles.tabBarAndroid,
        ]}>
        <Tab {...getTabProps(0)} />
        <Tab {...getTabProps(1)} />
        <TouchableOpacity
          onPress={onPressCenterButton}
          style={[
            styles.centerButton,
            Platform.OS === 'android' && styles.centerButtonAndroid,
          ]}>
          <ScanIcon />
        </TouchableOpacity>
        <Tab {...getTabProps(2)} />
        <Tab {...getTabProps(3)} />
      </View>
    </SafeAreaView>
  );
};

export default CustomTabBar;
