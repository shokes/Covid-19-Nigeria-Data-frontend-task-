import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const covidNigeriaApiUrl = 'https://covidnigeria.herokuapp.com/api';

const initialState = {
  cases: [],
  isLoading: true,
};

export const getCases = createAsyncThunk('cases/getCases', () => {
  return fetch(covidNigeriaApiUrl)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

const casesSlice = createSlice({
  name: 'cases',
  initialState,
  extraReducers: {
    [getCases.pending]: (state) => {
      state.isLoading = true;
    },
    [getCases.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cases = action.payload;
    },
    [getCases.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default casesSlice.reducer;
