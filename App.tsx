import React, {Fragment} from 'react';
import Onboarding from './src/components/Onboarding';
import HomeScreen from './src/screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import ComingSoonScreen from './src/screens/ComingSoonScreen';
import HomeIcon from './src/assets/images/homeIcon.svg';
import HealthCareIcon from './src/assets/images/healthCareIcon.svg';
import ProfileIcon from './src/assets/images/profileIcon.svg';
import GardenIcon from './src/assets/images/gardenIcon.svg';
import {CustomTabBar} from './src/components/CustomTabBar';
import {Provider, useSelector} from 'react-redux';
import {persistor, RootState, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  const onboardingIsShown = useSelector<RootState>(
    state => state.onboarding.isShown,
  );

  return (
    <Fragment>
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
    </Fragment>
  );
}

function AppWithProviders(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}

export default AppWithProviders;
