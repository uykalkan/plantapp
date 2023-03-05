import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import AppContainer from '../AppContainer';
import thunk from 'redux-thunk';
import {store} from '../src/redux/store';
import {onBoardingActions} from '../src/redux/reduces/onboardingSlice';
import Onboarding from '../src/components/Onboarding';

const mockStore = configureMockStore([thunk])({
  onboarding: {
    isShown: false,
  },
  category: {
    categories: {
      data: [],
    },
    loading: false,
  },
  question: {
    questions: [],
    loading: false,
  },
});

describe('Onboarding Test', () => {
  it('onboarding screen show when set the onboarding shown state to true', () => {
    const {getByTestId} = render(
      <Provider store={mockStore}>
        <AppContainer />
      </Provider>,
    );

    mockStore.dispatch(onBoardingActions.resetOnboardingShown());
    expect(getByTestId('onboarding-screen')).toBeDefined();
  });

  it('onboarding screen show when set the onboarding shown state to false', async () => {
    const {queryByTestId} = render(
      <Provider store={store}>
        <AppContainer />
      </Provider>,
    );

    store.dispatch(onBoardingActions.setOnboardingShown());
    expect(queryByTestId('onboarding-screen')).toBeFalsy();
  });

  it('click next button and change to next screen', async () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <Onboarding />
      </Provider>,
    );

    const button = getByTestId('get-started-button');

    fireEvent.press(button);

    await waitFor(() => {
      expect(getByTestId('onboarding-one-screen-button')).toBeDefined();
    });
  });
});
