import {createSlice} from '@reduxjs/toolkit';

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState: {
    isShown: false,
  },
  reducers: {
    setOnboardingShown: state => {
      state.isShown = true;
    },
    resetOnboardingShown: state => {
      state.isShown = false;
    },
  },
});
export const onBoardingActions = onboardingSlice.actions;
export default onboardingSlice.reducer;
