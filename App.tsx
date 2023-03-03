import React, {Fragment} from 'react';
import Onboarding from './src/components/Onboarding';
import HomeScreen from './src/screens/HomeScreen';

function App(): JSX.Element {
  return (
    <Fragment>
      {true && <Onboarding />}

      <HomeScreen />
    </Fragment>
  );
}

export default App;
