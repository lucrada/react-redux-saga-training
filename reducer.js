import { createSlice } from '@reduxjs/toolkit';

const testSlice = createSlice({
  name: 'test',
  initialState: { users: [] },
  reducers: {
    testReducer1: (state, action) => ({ ...state, users: action.payload }),
  },
});

export const { testReducer1 } = testSlice.actions;
export default testSlice.reducer;
