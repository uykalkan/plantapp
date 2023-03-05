import React from 'react';
import App from '../App';
import {render} from '@testing-library/react-native';

describe('App component', () => {
  it('displays the welcome text', () => {
    const {getAllByText} = render(<App />);
    expect(getAllByText('Welcome to React Native')).toBeFalsy();
  });
});
