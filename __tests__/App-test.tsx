import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
import {render} from '@testing-library/react-native';
import Onboarding from '../src/components/Onboarding';

describe('App component', () => {
  it('displays the welcome text', () => {
    const {getAllByText} = render(<App />);
    expect(getAllByText('Welcome to React Native')).toBeTruthy();
  });
});

describe('Onboarding component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Onboarding />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
