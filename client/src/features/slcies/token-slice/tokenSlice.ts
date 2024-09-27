import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IToken {
  value: string;
}

const initialState: IToken = {
  value: '',
};

const token = createSlice({
  name: 'token',
  initialState,
  reducers: {
    writeToken(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { writeToken } = token.actions;
export default token.reducer;
