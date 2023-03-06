import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import PagerView from 'react-native-pager-view';
import {globalStyles} from '../constants/globalStyles';
import GetStartedScreen from '../screens/GetStartedScreen';
import OnboardingOneScreen from '../screens/OnboardingOneScreen';
import OnboardingTwoScreen from '../screens/OnboardingTwoScreen';
import {DirectEventHandler} from 'react-native/Libraries/Types/CodegenTypes';
import {OnPageSelectedEventData} from 'react-native-pager-view/src/PagerViewNativeComponent';
import PaywallScreen from '../screens/PaywallScreen';

const Onboarding: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pagerViewRef = React.useRef<PagerView>(null);
  const [scrollIsEnabled, setScrollIsEnabled] = useState(true);

  useEffect(() => {
    setScrollIsEnabled(![0, 3].includes(currentPage));
  }, [currentPage, setScrollIsEnabled]);

  const handlePageSelected: DirectEventHandler<
    OnPageSelectedEventData
  > = event => {
    setCurrentPage(event.nativeEvent.position);
  };

  const setPage = (pageNumber: number) => {
    pagerViewRef.current?.setPage(pageNumber);
  };

  return (
    <>
      <StatusBar
        barStyle={currentPage === 3 ? 'light-content' : 'dark-content'}
      />

      <PagerView
        testID="onboarding-screen"
        scrollEnabled={scrollIsEnabled}
        ref={pagerViewRef}
        onPageSelected={handlePageSelected}
        style={styles.root}
        initialPage={0}>
        <View key="0">
          <GetStartedScreen onPressButton={() => setPage(1)} />
        </View>
        <View key="1">
          <OnboardingOneScreen onPressButton={() => setPage(2)} />
        </View>
        <View key="2">
          <OnboardingTwoScreen onPressButton={() => setPage(3)} />
        </View>
        <View key="3">
          <PaywallScreen />
        </View>
      </PagerView>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    ...globalStyles.fullAbsolute,
    zIndex: 1,
  },
});

export default Onboarding;
