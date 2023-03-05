import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getQuestionsService} from '../../services/getQuestionsService';
import {Question} from '../../types/Question';

export const getQuestions = createAsyncThunk<Question[]>(
  'question/getQuestions',
  getQuestionsService,
);

type QuestionState = {
  questions: Question[];
  loading: boolean;
};

const initialState: QuestionState = {
  loading: false,
  questions: [],
};

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getQuestions.pending, state => {
      state.loading = true;
    });
    builder.addCase(getQuestions.fulfilled, (state, action) => {
      state.questions = action.payload;
      state.loading = false;
    });
    builder.addCase(getQuestions.rejected, state => {
      state.loading = false;
    });
  },
});

export const questionActions = questionSlice.actions;
export default questionSlice.reducer;
