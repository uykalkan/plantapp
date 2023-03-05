import {
  AnyAction,
  combineReducers,
  configureStore,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import onboardingSlice from './reduces/onboardingSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import categorySlice from './reduces/categorySlice';
import questionSlice from './reduces/questionSlice';

const persistConfig = {
  key: 'root_v1',
  storage: AsyncStorage,
  blacklist: ['category', 'question'],
};

const rootReducer = combineReducers({
  onboarding: onboardingSlice,
  category: categorySlice,
  question: questionSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof store.getState>;

export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(store);
