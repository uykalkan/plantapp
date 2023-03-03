import React, {Fragment} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import Onboarding from './src/components/Onboarding';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Fragment>
      <Onboarding />

      <SafeAreaView>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView contentInsetAdjustmentBehavior="automatic" />
      </SafeAreaView>
    </Fragment>
  );
}

export default App;
