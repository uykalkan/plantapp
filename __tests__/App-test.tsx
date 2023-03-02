import React from 'react';
import renderer from 'react-test-renderer';
import App, {Section} from '../App';
import {render} from '@testing-library/react-native';

describe('App component', () => {
  it('displays the welcome text', () => {
    const {getAllByText} = render(<App />);
    expect(getAllByText('Welcome to React Native')).toBeTruthy();
  });
});

describe('Section component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Section title="Test">Test content</Section>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
