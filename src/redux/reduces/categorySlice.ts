import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getCategoriesService} from '../../services/getCategoriesService';
import {CategoryResponse} from '../../types/Category';

export const getCategories = createAsyncThunk<CategoryResponse>(
  'category/getCategories',
  getCategoriesService,
);

type CategoryState = {
  categories: CategoryResponse;
  loading: boolean;
};

const initialState: CategoryState = {
  loading: false,
  categories: {
    data: [],
  },
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCategories.pending, state => {
      state.loading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.loading = false;
    });
    builder.addCase(getCategories.rejected, state => {
      state.loading = false;
    });
  },
});

export const categoryActions = categorySlice.actions;
export default categorySlice.reducer;
