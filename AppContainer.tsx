import {useSelector} from 'react-redux';
import {RootState} from './src/redux/store';
import React, {Fragment} from 'react';
import Onboarding from './src/components/Onboarding';
import {NavigationContainer} from '@react-navigation/native';
import {CustomTabBar} from './src/components/CustomTabBar';
import HomeIcon from './src/assets/images/homeIcon.svg';
import HomeScreen from './src/screens/HomeScreen';
import HealthCareIcon from './src/assets/images/healthCareIcon.svg';
import ComingSoonScreen from './src/screens/ComingSoonScreen';
import GardenIcon from './src/assets/images/gardenIcon.svg';
import ProfileIcon from './src/assets/images/profileIcon.svg';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();

export function AppContainer(): JSX.Element {
  const onboardingIsShown = useSelector<RootState>(
    state => state.onboarding.isShown,
  );

  return (
    <View testID="app-container" style={{flex: 1}}>
      {!onboardingIsShown && <Onboarding />}

      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}
          tabBar={(tabBarProps: any) => <CustomTabBar {...tabBarProps} />}>
          <Tab.Screen
            options={{tabBarIcon: HomeIcon}}
            name="Home"
            component={HomeScreen}
          />
          <Tab.Screen
            options={{tabBarIcon: HealthCareIcon}}
            name="Diagnose"
            component={ComingSoonScreen}
          />
          <Tab.Screen
            options={{tabBarIcon: GardenIcon}}
            name="My Garden"
            component={ComingSoonScreen}
          />
          <Tab.Screen
            options={{tabBarIcon: ProfileIcon}}
            name="Profile"
            component={ComingSoonScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default AppContainer;
