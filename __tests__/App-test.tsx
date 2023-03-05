import {render} from '@testing-library/react-native';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import AppContainer from '../AppContainer';
import thunk from 'redux-thunk';

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

describe('App Test', () => {
  it('renders correctly', async () => {
    const {getByTestId} = render(
      <Provider store={mockStore}>
        <AppContainer />
      </Provider>,
    );
    const appContainer = getByTestId('app-container');
    expect(appContainer).toBeDefined();
  });
});
