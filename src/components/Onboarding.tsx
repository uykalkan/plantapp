import React, {useEffect, useState} from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import {globalStyles} from '../constants/globalStyles';
import GetStartedScreen from '../screens/GetStartedScreen';
import OnboardingOneScreen from '../screens/OnboardingOneScreen';
import OnboardingTwoScreen from '../screens/OnboardingTwoScreen';
import {DirectEventHandler} from 'react-native/Libraries/Types/CodegenTypes';
import {OnPageSelectedEventData} from 'react-native-pager-view/src/PagerViewNativeComponent';
import PaywallScreen from '../screens/PaywallScreen';
import {OnPageScrollEventData} from 'react-native-pager-view/lib/typescript/PagerViewNativeComponent';

const Onboarding: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pagerViewRef = React.useRef<PagerView>(null);
  const [scrollIsEnabled, setScrollIsEnabled] = useState(true);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    setScrollIsEnabled(![0, 3].includes(currentPage));
  }, [currentPage, setScrollIsEnabled]);

  const handlePageSelected: DirectEventHandler<
    OnPageSelectedEventData
  > = event => {
    setCurrentPage(event.nativeEvent.position);
  };

  const handlePageScroll: DirectEventHandler<OnPageScrollEventData> = event => {
    setCurrentOffset(event.nativeEvent.offset);
    setDirection(event.nativeEvent.position);
  };

  const setPage = (pageNumber: number) => {
    pagerViewRef.current?.setPage(pageNumber);
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={currentPage === 3 ? 'light-content' : 'dark-content'}
      />

      <PagerView
        testID="onboarding-screen"
        scrollEnabled={scrollIsEnabled}
        ref={pagerViewRef}
        onPageSelected={handlePageSelected}
        onPageScroll={handlePageScroll}
        style={styles.root}
        initialPage={0}>
        <View key="0">
          <GetStartedScreen />
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

      <SafeAreaView style={styles.footerSafeArea}>
        <View
          style={[
            {
              ...styles.footerInner,
              left:
                currentPage === 2 && direction === 2
                  ? `${currentOffset * -100}%`
                  : undefined,
            },
          ]}>
          {currentPage === 0 && (
            <GetStartedScreen.Footer onPressButton={() => setPage(1)} />
          )}

          {currentPage === 1 && (
            <>
              <OnboardingOneScreen.Footer onPressButton={() => setPage(2)} />
            </>
          )}

          {currentPage === 2 && (
            <OnboardingTwoScreen.Footer onPressButton={() => setPage(3)} />
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    ...globalStyles.fullAbsolute,
    backgroundColor: 'white',
    zIndex: 1,
  },
  footerSafeArea: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 2,
  },
  footerInner: {
    paddingLeft: 24,
    paddingRight: 24,
  },
});

export default Onboarding;
